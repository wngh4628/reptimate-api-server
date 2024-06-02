/// <reference types="express" />
/// <reference types="multer" />
import { User } from 'src/domains/user/entities/user.entity';
import { BoardService } from './board.service';
import { PageRequest } from 'src/core/page';
import { UpdateBoardDto } from './dtos/update-board.dto';
import { CommentDto } from './dtos/board-comment.dto';
import { createBoardDto } from './dtos/create-board.dto';
import { BoardCategoryPageRequest } from './dtos/board-category-page';
import { UpdateStreamKeyDto } from './dtos/update-stream-key.dto';
export declare class Boardcontroller {
    private readonly boardService;
    constructor(boardService: BoardService);
    createBoard(res: any, dto: createBoardDto, user: User): Promise<import("express").Response<unknown, Record<string, any>>>;
    getBoard(res: any, pageRequest: BoardCategoryPageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
    getAuction(res: any, pageRequest: BoardCategoryPageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
    findBoard(res: any, boardIdx: number, userIdx: number): Promise<import("express").Response<unknown, Record<string, any>>>;
    removeBoard(res: any, boardIdx: number, user: User): Promise<import("express").Response<unknown, Record<string, any>>>;
    updateBoard(res: any, boardIdx: number, user: User, dto: UpdateBoardDto): Promise<import("express").Response<unknown, Record<string, any>>>;
    updateStreamKey(res: any, boardAuctionIdx: number, dto: UpdateStreamKeyDto): Promise<import("express").Response<unknown, Record<string, any>>>;
    createcomment(res: any, dto: CommentDto, user: User, file: Express.Multer.File): Promise<import("express").Response<unknown, Record<string, any>>>;
    removecomment(res: any, boardIdx: number, category: string, commentIdx: number, user: User): Promise<import("express").Response<unknown, Record<string, any>>>;
    getcomment(res: any, pageRequest: PageRequest, category: string, boardIdx: number): Promise<import("express").Response<unknown, Record<string, any>>>;
    updatecomment(res: any, commentIdx: number, user: User, dto: CommentDto, file: Express.Multer.File): Promise<import("express").Response<unknown, Record<string, any>>>;
    boardBookmark(res: any, boardIdx: number, category: string, user: User): Promise<import("express").Response<unknown, Record<string, any>>>;
    updateBookmark(res: any, boardIdx: number, user: User): Promise<import("express").Response<unknown, Record<string, any>>>;
    findRecommendItem(res: any, user: User): Promise<import("express").Response<unknown, Record<string, any>>>;
    searchTotal(res: any, keyword: string): Promise<import("express").Response<unknown, Record<string, any>>>;
    searchCategory(res: any, keyword: string, pageRequest: BoardCategoryPageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
}
