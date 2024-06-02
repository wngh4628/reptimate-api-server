import { UpdateUserDto } from './../dtos/update-user.dto';
import BaseEntity from 'src/core/entity/base.entity';
import { SocialMethodType } from 'src/domains/auth/helpers/constants';
import { Pet } from 'src/domains/diary/entities/pet.entity';
import { Board } from 'src/domains/board/entities/board.entity';
export declare class User extends BaseEntity {
    email: string;
    password: string;
    nickname: string;
    profilePath: string;
    isPremium: boolean;
    agreeWithMarketing: boolean;
    loginMethod: SocialMethodType;
    fbToken: string;
    refreshToken: string;
    pets: Pet[];
    board: Board;
    static from({ email, password, nickname, profilePath, isPremium, agreeWithMarketing, loginMethod, fbToken, }: {
        email: string;
        password: string;
        nickname: string;
        profilePath: string;
        isPremium: boolean;
        agreeWithMarketing: boolean;
        loginMethod: SocialMethodType;
        fbToken: string;
    }): User;
    updateFromDto(dto: UpdateUserDto): void;
}
