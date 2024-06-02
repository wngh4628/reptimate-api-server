"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const user_service_1 = require("./../user/user.service");
const password_utils_1 = require("./../../utils/password.utils");
const http_error_objects_1 = require("./../../core/http/http-error-objects");
const user_repository_1 = require("./../user/repositories/user.repository");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const axios_1 = require("axios");
const constants_1 = require("./helpers/constants");
const client_utils_1 = require("./../../utils/client.utils");
const ref_token_repository_1 = require("./repositories/ref-token.repository");
const fb_token_repository_1 = require("./repositories/fb-token.repository");
let AuthService = class AuthService {
    constructor(userRepository, refTokenRepository, fbTokenRepository, jwtService, userService) {
        this.userRepository = userRepository;
        this.refTokenRepository = refTokenRepository;
        this.fbTokenRepository = fbTokenRepository;
        this.jwtService = jwtService;
        this.userService = userService;
        this.logger = new common_1.Logger('Auth');
    }
    async login(userAgent, dto) {
        const platform = (0, client_utils_1.detectPlatform)(userAgent);
        this.logger.log(`login platform: ${platform}`);
        const { email, password } = dto;
        const user = await this.userRepository.findOne({
            where: { email },
        });
        if (!user) {
            throw new common_1.UnauthorizedException(http_error_objects_1.HttpErrorConstants.INVALID_AUTH);
        }
        await (0, password_utils_1.validatePassword)(password, user.password);
        const firebaseToken = dto.fbToken;
        await this.fbTokenRepository.removeFbTokenIfExists(firebaseToken);
        await this.fbTokenRepository.createOrUpdateFbToken(user.idx, platform, firebaseToken);
        const accessToken = await this.generateAccessToken(user.idx, platform);
        const refreshToken = await this.generateRefreshToken(user.idx, platform);
        await this.refTokenRepository.createOrUpdateRefToken(user.idx, platform, refreshToken);
        return {
            accessToken: accessToken,
            refreshToken: refreshToken,
            idx: user.idx,
            profilePath: user.profilePath,
            nickname: user.nickname,
        };
    }
    async socialLogin(userAgent, dto) {
        const platform = (0, client_utils_1.detectPlatform)(userAgent);
        this.logger.log(`socialLogin platform: ${platform}`);
        let user;
        switch (dto.socialType) {
            case constants_1.SocialMethodType.KAKAO: {
                user = await this.getUserByKakaoAccessToken(dto);
                break;
            }
            case constants_1.SocialMethodType.GOOGLE: {
                user = await this.getSocialLoginUser(dto);
                break;
            }
            case constants_1.SocialMethodType.APPLE: {
                user = await this.getSocialLoginUser(dto);
                break;
            }
            default: {
                throw new common_1.UnauthorizedException(http_error_objects_1.HttpErrorConstants.INVALID_AUTH);
            }
        }
        const firebaseToken = dto.fbToken;
        await this.fbTokenRepository.createOrUpdateFbToken(user.idx, platform, firebaseToken);
        const accessToken = await this.generateAccessToken(user.idx, platform);
        const refreshToken = await this.generateRefreshToken(user.idx, platform);
        await this.refTokenRepository.createOrUpdateRefToken(user.idx, platform, refreshToken);
        return {
            accessToken: accessToken,
            refreshToken: refreshToken,
            idx: user.idx,
            profilePath: user.profilePath,
            nickname: user.nickname,
        };
    }
    async getUserByKakaoAccessToken(dto) {
        const userInfoFromKakao = await axios_1.default.get('https://kapi.kakao.com/v2/user/me', {
            headers: { Authorization: `Bearer ${dto.accessToken}` },
        });
        if (!userInfoFromKakao) {
            throw new common_1.UnauthorizedException(http_error_objects_1.HttpErrorConstants.INVALID_AUTH);
        }
        const user = await this.userRepository.findOne({
            where: {
                email: userInfoFromKakao.data.kakao_account.email,
                loginMethod: dto.socialType,
            },
        });
        if (user) {
            return user;
        }
        const nickname = userInfoFromKakao.data.properties.nickname;
        const email = userInfoFromKakao.data.kakao_account.email;
        const kakaoUser = await this.userService.createSocialUser(email, nickname, dto.socialType);
        return kakaoUser;
    }
    async getSocialLoginUser(dto) {
        const user = await this.userRepository.findOne({
            where: {
                email: dto.email,
                loginMethod: dto.socialType,
            },
        });
        if (user) {
            return user;
        }
        const socialUser = await this.userService.createSocialUser(dto.email, dto.nickname, dto.socialType);
        return socialUser;
    }
    async generateAccessToken(userIdx, platform) {
        const payload = { userIdx: userIdx, OS: platform };
        return this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '2h',
        });
    }
    async generateRefreshToken(userIdx, platform) {
        const payload = { userIdx: userIdx, OS: platform };
        return this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '14 days',
        });
    }
    async getNewAccessToken(userAgent, refToken) {
        const platform = (0, client_utils_1.detectPlatform)(userAgent);
        this.logger.log(`getNewAccessToken platform: ${platform}`);
        const refTokenEntity = await this.refTokenRepository.findOne({
            where: {
                refToken,
            },
        });
        if (!refTokenEntity) {
            throw new common_1.UnauthorizedException(http_error_objects_1.HttpErrorConstants.INVALID_TOKEN);
        }
        const refreshTokenMatches = await this.jwtService.verify(refToken);
        if (!refreshTokenMatches) {
            throw new common_1.UnauthorizedException(http_error_objects_1.HttpErrorConstants.EXPIRED_REFRESH_TOKEN);
        }
        const accessToken = await this.generateAccessToken(refTokenEntity.userIdx, platform);
        return {
            accessToken,
        };
    }
    async logout(userAgent, userIdx) {
        const platform = (0, client_utils_1.detectPlatform)(userAgent);
        this.logger.log(`logout platform: ${platform}`);
        await this.refTokenRepository.update({ userIdx, platform }, { refToken: null });
        await this.fbTokenRepository.update({ userIdx, platform }, { fbToken: null });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        ref_token_repository_1.RefTokenRepository,
        fb_token_repository_1.FbTokenRepository,
        jwt_1.JwtService,
        user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map