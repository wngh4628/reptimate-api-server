import BaseEntity from 'src/core/entity/base.entity';
import { Board } from './board.entity';
export declare class BoardAuction extends BaseEntity {
    boardIdx: number;
    buyPrice: number;
    startPrice: number;
    currentPrice: number;
    unit: number;
    alertTime: string;
    endTime: string;
    extensionTime: string;
    extensionRule: number;
    gender: string;
    size: string;
    variety: string;
    pattern: string;
    birthDate: string;
    state: string;
    streamKey: string;
    board: Board;
    static from(boardIdx: number, buyPrice: number, startPrice: number, unit: number, extensionRule: number, gender: string, size: string, variety: string, pattern: string, birthDate: string, state: string): BoardAuction;
    static updateForm(idx: number, boardIdx: number, buyPrice: number, startPrice: number, unit: number, extensionRule: number, gender: string, size: string, variety: string, pattern: string, birthDate: string, state: string, streamKey: string): BoardAuction;
}
