import { Repository } from 'typeorm';
import { BoardCommercial } from '../entities/board-commercial.entity';
export declare class BoardCommercialRepository extends Repository<BoardCommercial> {
    findRecommendItem(morph: string, sequence: number): Promise<{
        user: {
            idx: number;
            nickname: string;
        };
        board: {
            category: string;
            userIdx: number;
            title: string;
            thumbnail: string;
            media: string;
            description: string;
            view: number;
            commentCnt: number;
            status: import("../board-status.enum").BoardStatus;
            images: import("../entities/board-image.entity").BoardImage[];
            bookmark: import("../entities/board-bookmark.entity").Bookmark;
            chatConversation: import("../../mypage/entities/chat-conversation.entity").ChatConversation;
            boardCommercial: BoardCommercial;
            boardAuction: import("../entities/board-auction.entity").BoardAuction;
            keywords: string;
            idx: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date;
        };
        boardIdx: number;
        price: number;
        gender: string;
        size: string;
        variety: string;
        state: string;
        pattern: string;
        birthDate: string;
        idx: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
    }[]>;
    findExtraItems(sequence: number): Promise<{
        user: {
            idx: number;
            nickname: string;
        };
        board: {
            category: string;
            userIdx: number;
            title: string;
            thumbnail: string;
            media: string;
            description: string;
            view: number;
            commentCnt: number;
            status: import("../board-status.enum").BoardStatus;
            images: import("../entities/board-image.entity").BoardImage[];
            bookmark: import("../entities/board-bookmark.entity").Bookmark;
            chatConversation: import("../../mypage/entities/chat-conversation.entity").ChatConversation;
            boardCommercial: BoardCommercial;
            boardAuction: import("../entities/board-auction.entity").BoardAuction;
            keywords: string;
            idx: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date;
        };
        boardIdx: number;
        price: number;
        gender: string;
        size: string;
        variety: string;
        state: string;
        pattern: string;
        birthDate: string;
        idx: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
    }[]>;
}
