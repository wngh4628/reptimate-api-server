import BaseEntity from 'src/core/entity/base.entity';
import { Board } from './board.entity';
export declare class BoardCommercial extends BaseEntity {
    boardIdx: number;
    price: number;
    gender: string;
    size: string;
    variety: string;
    state: string;
    pattern: string;
    birthDate: string;
    board: Board;
    static from(boardIdx: number, gender: string, price: number, size: string, variety: string, pattern: string, birthDate: string): BoardCommercial;
    static updateFrom(idx: number, boardIdx: number, gender: string, price: number, size: string, variety: string, pattern: string, birthDate: string, state: string): BoardCommercial;
}
