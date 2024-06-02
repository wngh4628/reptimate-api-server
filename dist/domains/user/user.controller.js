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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const api_created_response_1 = require("../../core/swagger/api-created-response");
const api_ok_response_1 = require("../../core/swagger/api-ok-response");
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dtos/create-user.dto");
const update_user_dto_1 = require("./dtos/update-user.dto");
const swagger_1 = require("@nestjs/swagger");
const verify_email_dto_1 = require("./dtos/verify-email.dto");
const user_entity_1 = require("./entities/user.entity");
const auth_service_1 = require("../auth/auth.service");
const use_auth_1 = require("../auth/auth-guards/use-auth");
const auth_user_decorator_1 = require("../../core/decorators/auth-user.decorator");
const http_response_1 = require("../../core/http/http-response");
const delete_user_dto_1 = require("./dtos/delete-user.dto");
const check_nickname_dto_1 = require("./dtos/check-nickname.dto");
const update_password_dto_1 = require("./dtos/update-password.dto");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_tags_1 = require("../../core/swagger/swagger-tags");
const api_error_common_response_1 = require("../../core/swagger/api-error-common-response");
const user_info_response_dto_1 = require("./dtos/user-info-response.dto");
const http_status_codes_1 = require("http-status-codes");
const http_error_objects_1 = require("../../core/http/http-error-objects");
const apt_error_response_1 = require("../../core/swagger/apt-error-response");
const verify_email_response_dto_1 = require("./dtos/verify-email-response.dto");
const find_password_dto_1 = require("./dtos/find-password.dto");
let UserController = class UserController {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    async createUser(res, dto) {
        const user = await this.userService.createUser(dto);
        return http_response_1.default.created(res, { body: user.idx });
    }
    async verifyEmail(res, dto) {
        const signupVerifyToken = await this.userService.sendMemberJoinEmail(dto);
        return http_response_1.default.ok(res, signupVerifyToken);
    }
    async getUserInfo(res, user) {
        const userInfo = await this.userService.getUserInfo(user.idx);
        return http_response_1.default.ok(res, userInfo);
    }
    async update(res, dto, user, file) {
        const userInfo = await this.userService.update(file, dto, user.idx);
        return http_response_1.default.ok(res, userInfo);
    }
    async existNickname(res, dto) {
        const isExist = await this.userService.checkExistNickname(dto.nickname);
        return http_response_1.default.ok(res, isExist);
    }
    async updatePassword(res, dto, user) {
        await this.userService.updatePassword(user.idx, dto);
        return http_response_1.default.ok(res);
    }
    async findPassword(res, dto) {
        await this.userService.findPassword(dto);
        return http_response_1.default.ok(res);
    }
    async remove(res, dto, user) {
        await this.userService.removeByPassword(dto, user.idx);
        return http_response_1.default.ok(res);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '회원가입',
        description: '회원가입은 유저를 생성하는 것이므로 POST 응답인 201 리턴함.',
    }),
    (0, swagger_1.ApiBody)({ type: create_user_dto_1.CreateUserDto }),
    (0, api_created_response_1.ApiCreatedResponseTemplate)({ description: '생성한 유저 인덱스 리턴' }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.CONFLICT,
            errorFormatList: [
                http_error_objects_1.HttpErrorConstants.EXIST_EMAIL,
                http_error_objects_1.HttpErrorConstants.EXIST_NICKNAME,
            ],
        },
    ]),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '가입 인증 이메일 전송',
        description: '회원가입시 이메일 인증을 한다.',
    }),
    (0, swagger_1.ApiBody)({ type: verify_email_dto_1.VerifyEmailDto }),
    (0, api_created_response_1.ApiCreatedResponseTemplate)({ type: verify_email_response_dto_1.VerifyEmailResponseDto }),
    (0, common_1.Post)('/email-verify'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, verify_email_dto_1.VerifyEmailDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "verifyEmail", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '회원 정보 조회',
        description: '현재 로그인 중인 회원의 정보를 조회한다.',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)({ type: user_info_response_dto_1.UserInfoResponseDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_USER],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/me'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserInfo", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '회원 정보 수정',
        description: '현재 로그인 중인 회원의 정보를 수정한다.',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)({ type: update_user_dto_1.UpdateUserDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_USER],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiBody)({ type: update_user_dto_1.UpdateUserDto }),
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, auth_user_decorator_1.default)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_dto_1.UpdateUserDto,
        user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '닉네임 중복 확인',
        description: '회원 정보 수정 화면에서 닉네임 중복 확인을한다.',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)({ description: '중복이면 true, 아니면 false 리턴' }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.CONFLICT,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.EXIST_NICKNAME],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, swagger_1.ApiBody)({ type: check_nickname_dto_1.CheckNicknameDto }),
    (0, common_1.Post)('/nickname'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, check_nickname_dto_1.CheckNicknameDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "existNickname", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '비밀번호 수정',
        description: '현재 비밀번호 입력 후 비밀번호를 변경한다.',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)(),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [
                http_error_objects_1.HttpErrorConstants.CANNOT_FIND_USER,
                http_error_objects_1.HttpErrorConstants.INVALID_AUTH,
            ],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, swagger_1.ApiBody)({ type: update_password_dto_1.UpdatePasswordDto }),
    (0, common_1.Patch)('/password'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_password_dto_1.UpdatePasswordDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatePassword", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '비밀번호 찾기',
        description: '이메일 인증 후 새로운 비밀번호를 설정한다.',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)(),
    (0, swagger_1.ApiBody)({ type: find_password_dto_1.FindPasswordDto }),
    (0, common_1.Post)('/find-password'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, find_password_dto_1.FindPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findPassword", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '회원 탈퇴',
        description: '비밀번호를 입력하여 회원 탈퇴한다. ',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)(),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [
                http_error_objects_1.HttpErrorConstants.CANNOT_FIND_USER,
                http_error_objects_1.HttpErrorConstants.INVALID_AUTH,
            ],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, swagger_1.ApiBody)({ type: delete_user_dto_1.DeleteUserDto }),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, delete_user_dto_1.DeleteUserDto, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)(swagger_tags_1.SwaggerTag.USER),
    (0, api_error_common_response_1.ApiCommonErrorResponseTemplate)(),
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map