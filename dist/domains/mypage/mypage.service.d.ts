import { User } from '../user/entities/user.entity';
import { BoardRepository } from '../board/repositories/board.repository';
import { BoardListDto } from '../board/dtos/board-list.dto';
import { Page, PageRequest } from 'src/core/page';
import { BoardCategoryPageRequest } from '../board/dtos/board-category-page';
import { BoardCommercialRepository } from '../board/repositories/board-commercial.repository';
import { BoardAuctionRepository } from '../board/repositories/board-auction.repository';
import BoardComment from '../board/entities/board-comment.entity';
import { DataSource } from 'typeorm';
import { ChatConversationRepository } from './repositories/chat-conversation.repository';
import { ChatConversation } from './entities/chat-conversation.entity';
import { Bookmark } from '../board/entities/board-bookmark.entity';
import { BoardBookmarkRepository } from '../board/repositories/board-bookmark.repository';
import { ValueAnalyzerRepository } from './repositories/value-analyzer.repository';
import { ValueAnalyzer } from './entities/value-analyzer.entity';
export declare class MypageService {
    private boardRepository;
    private boardCommercialRepository;
    private valueAnalyzerRepository;
    private boardAuctionRepository;
    private chatConversationRepository;
    private boardBookmarkRepository;
    private dataSource;
    constructor(boardRepository: BoardRepository, boardCommercialRepository: BoardCommercialRepository, valueAnalyzerRepository: ValueAnalyzerRepository, boardAuctionRepository: BoardAuctionRepository, chatConversationRepository: ChatConversationRepository, boardBookmarkRepository: BoardBookmarkRepository, dataSource: DataSource);
    findBoard(user: User, pageRequest: PageRequest): Promise<Page<BoardListDto>>;
    findReply(user: User, pageRequest: PageRequest): Promise<Page<BoardComment>>;
    findMyAuction(user: User, pageRequest: BoardCategoryPageRequest): Promise<Page<BoardListDto>>;
    findMyBidding(user: User, pageRequest: PageRequest): Promise<Page<ChatConversation>>;
    findBookMark(user: User, pageRequest: PageRequest, category: string): Promise<Page<Bookmark>>;
    getValueAnalysisResultsList(user: User): Promise<ValueAnalyzer[]>;
    getValueAnalysisResultDetail(user: User, idx: number): Promise<ValueAnalyzer>;
}
