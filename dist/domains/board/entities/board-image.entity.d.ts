import BaseEntity from 'src/core/entity/base.entity';
import { Board } from './board.entity';
export declare class BoardImage extends BaseEntity {
    boardIdx: number;
    category: string;
    mediaSequence: number;
    path: string;
    coverImgPath: string;
    board: Board;
}
