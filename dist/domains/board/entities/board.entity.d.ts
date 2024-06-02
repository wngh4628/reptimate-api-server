import BaseEntity from 'src/core/entity/base.entity';
import { BoardStatus } from '../board-status.enum';
import { BoardImage } from './board-image.entity';
import { UpdateBoardDto } from '../dtos/update-board.dto';
import { Bookmark } from './board-bookmark.entity';
import { ChatConversation } from 'src/domains/mypage/entities/chat-conversation.entity';
import { BoardCommercial } from './board-commercial.entity';
import { User } from 'src/domains/user/entities/user.entity';
import { BoardAuction } from './board-auction.entity';
export declare class Board extends BaseEntity {
    category: string;
    userIdx: number;
    title: string;
    thumbnail: string;
    media: string;
    description: string;
    view: number;
    commentCnt: number;
    status: BoardStatus;
    images: BoardImage[];
    user: User;
    bookmark: Bookmark;
    chatConversation: ChatConversation;
    boardCommercial: BoardCommercial;
    boardAuction: BoardAuction;
    keywords: string;
    static from({ userIdx, title, category, description, thumbnail, }: {
        userIdx: number;
        title: string;
        category: string;
        description: string;
        thumbnail: string;
    }): Board;
    static updateFrom(userIdx: number, category: string, idx: number, title: string, description: string, thumbnail: string): Board;
    updateFromDto(dto: UpdateBoardDto): void;
}
