import { UserService } from './../user/user.service';
import { UserRepository } from './../user/repositories/user.repository';
import { LoginUserDto } from './dtos/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { SocialLoginUserDto } from './dtos/social-login-user.dto';
import { User } from '../user/entities/user.entity';
import { LoginResponseDto } from './dtos/login-response.dto';
import { RefTokenRepository } from './repositories/ref-token.repository';
import { FbTokenRepository } from './repositories/fb-token.repository';
export declare class AuthService {
    private readonly userRepository;
    private readonly refTokenRepository;
    private readonly fbTokenRepository;
    private jwtService;
    private readonly userService;
    constructor(userRepository: UserRepository, refTokenRepository: RefTokenRepository, fbTokenRepository: FbTokenRepository, jwtService: JwtService, userService: UserService);
    private logger;
    login(userAgent: string, dto: LoginUserDto): Promise<LoginResponseDto>;
    socialLogin(userAgent: string, dto: SocialLoginUserDto): Promise<LoginResponseDto>;
    getUserByKakaoAccessToken(dto: SocialLoginUserDto): Promise<User>;
    getSocialLoginUser(dto: SocialLoginUserDto): Promise<User>;
    generateAccessToken(userIdx: number, platform: string): Promise<string>;
    generateRefreshToken(userIdx: number, platform: string): Promise<string>;
    getNewAccessToken(userAgent: string, refToken: string): Promise<{
        accessToken: string;
    }>;
    logout(userAgent: string, userIdx: number): Promise<void>;
}
