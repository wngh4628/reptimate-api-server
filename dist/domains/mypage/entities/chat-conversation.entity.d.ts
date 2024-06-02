import BaseEntity from 'src/core/entity/base.entity';
import { Board } from 'src/domains/board/entities/board.entity';
export declare class ChatConversation extends BaseEntity {
    type: string;
    score: number;
    roomIdx: number;
    userIdx: number;
    message: string;
    action: string;
    board: Board;
    static from(type: string, score: number, roomIdx: number, userIdx: number, message: string): ChatConversation;
}
