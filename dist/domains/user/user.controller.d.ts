/// <reference types="express" />
/// <reference types="multer" />
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { VerifyEmailDto } from './dtos/verify-email.dto';
import { User } from './entities/user.entity';
import { AuthService } from '../auth/auth.service';
import { DeleteUserDto } from './dtos/delete-user.dto';
import { CheckNicknameDto } from './dtos/check-nickname.dto';
import { UpdatePasswordDto } from './dtos/update-password.dto';
import { FindPasswordDto } from './dtos/find-password.dto';
export declare class UserController {
    private readonly userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    createUser(res: any, dto: CreateUserDto): Promise<import("express").Response<unknown, Record<string, any>>>;
    verifyEmail(res: any, dto: VerifyEmailDto): Promise<import("express").Response<unknown, Record<string, any>>>;
    getUserInfo(res: any, user: User): Promise<import("express").Response<unknown, Record<string, any>>>;
    update(res: any, dto: UpdateUserDto, user: User, file: Express.Multer.File): Promise<import("express").Response<unknown, Record<string, any>>>;
    existNickname(res: any, dto: CheckNicknameDto): Promise<import("express").Response<unknown, Record<string, any>>>;
    updatePassword(res: any, dto: UpdatePasswordDto, user: User): Promise<import("express").Response<unknown, Record<string, any>>>;
    findPassword(res: any, dto: FindPasswordDto): Promise<import("express").Response<unknown, Record<string, any>>>;
    remove(res: any, dto: DeleteUserDto, user: User): Promise<import("express").Response<unknown, Record<string, any>>>;
}
