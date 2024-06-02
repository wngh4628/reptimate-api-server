/// <reference types="express" />
import { AuthService } from './auth.service';
import { LoginUserDto } from './dtos/login-user.dto';
import { SocialLoginUserDto } from './dtos/social-login-user.dto';
import { RefreshTokenDto } from './dtos/refresh-token.dto';
import { User } from '../user/entities/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any, res: any, dto: LoginUserDto): Promise<import("express").Response<unknown, Record<string, any>>>;
    socialLogin(req: any, res: any, dto: SocialLoginUserDto): Promise<import("express").Response<unknown, Record<string, any>>>;
    getNewAccessToken(req: any, res: any, dto: RefreshTokenDto): Promise<import("express").Response<unknown, Record<string, any>>>;
    logout(req: any, res: any, user: User): Promise<import("express").Response<unknown, Record<string, any>>>;
}
