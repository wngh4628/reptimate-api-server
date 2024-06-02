import { Repository } from 'typeorm';
import { Board } from '../entities/board.entity';
import { BoardListDto } from '../dtos/board-list.dto';
import { BoardCategoryPageRequest } from '../dtos/board-category-page';
import { PageRequest } from 'src/core/page';
export declare class BoardRepository extends Repository<Board> {
    findAndCountByCategory(pageRequest: BoardCategoryPageRequest, category: string, orderCriteria: string): Promise<[BoardListDto[], number]>;
    findBoadDetailByBoardIdx(boardIdx: number): Promise<BoardListDto>;
    updateReplyCnt(boardIdx: number, commentCnt: number): void;
    updateViewCount(boardIdx: number, view: number): Promise<void>;
    findAndCountByCategoryMyPage(pageRequest: BoardCategoryPageRequest, userIdx: number): Promise<[BoardListDto[], number]>;
    findAndCountByAuctionMyPage(pageRequest: BoardCategoryPageRequest, userIdx: number): Promise<[BoardListDto[], number]>;
    findAndCountByUserIdx(userIdx: number, pageRequest: PageRequest): Promise<[BoardListDto[], number]>;
}
