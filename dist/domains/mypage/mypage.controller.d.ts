/// <reference types="express" />
import { MypageService } from './mypage.service';
import { User } from 'src/domains/user/entities/user.entity';
import { BoardCategoryPageRequest } from '../board/dtos/board-category-page';
import { PageRequest } from 'src/core/page';
export declare class Mypagecontroller {
    private readonly mypageService;
    constructor(mypageService: MypageService);
    findBoard(res: any, user: User, pageRequest: PageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
    findReply(res: any, user: User, pageRequest: PageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
    findMyAuction(res: any, user: User, pageRequest: BoardCategoryPageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
    findMyBidding(res: any, user: User, pageRequest: PageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
    findBookMark(res: any, user: User, pageRequest: PageRequest, category: string): Promise<import("express").Response<unknown, Record<string, any>>>;
    getValueAnalysisResultsList(res: any, user: User): Promise<import("express").Response<unknown, Record<string, any>>>;
    getValueAnalysisResultDetail(res: any, user: User, idx: number): Promise<import("express").Response<unknown, Record<string, any>>>;
}
