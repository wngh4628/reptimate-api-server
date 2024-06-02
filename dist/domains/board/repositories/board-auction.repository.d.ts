import { Repository } from 'typeorm';
import { BoardAuction } from '../entities/board-auction.entity';
import { BoardCategoryPageRequest } from '../dtos/board-category-page';
import { BoardListDto } from '../dtos/board-list.dto';
export declare class BoardAuctionRepository extends Repository<BoardAuction> {
    findAndCountByState(pageRequest: BoardCategoryPageRequest, state: string): Promise<[BoardListDto[], number]>;
}
