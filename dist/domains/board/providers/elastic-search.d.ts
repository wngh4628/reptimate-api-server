import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Board } from '../entities/board.entity';
import { BoardCommercial } from '../entities/board-commercial.entity';
import { BoardAuction } from '../entities/board-auction.entity';
import { BoardCategoryPageRequest } from '../dtos/board-category-page';
export declare class BoardElasticSearch {
    private readonly elasticsearchService;
    constructor(elasticsearchService: ElasticsearchService);
    insertBoard(board: Board, boardCommercial?: BoardCommercial, boardAuction?: BoardAuction): Promise<void>;
    boardSearch(boardIdx: number): Promise<import("@elastic/elasticsearch/lib/api/types").GetResponse<unknown>>;
    searchTotal(keyword: string): Promise<any>;
    searchCategory(keyword: string, pageRequest: BoardCategoryPageRequest): Promise<any>;
    deleteBoard(boardIdx: number): Promise<any>;
    updateBoard(boardIdx: number, board: Board, boardCommercial?: BoardCommercial, boardAuction?: BoardAuction): Promise<void>;
}
