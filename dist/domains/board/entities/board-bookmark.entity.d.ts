import BaseEntity from 'src/core/entity/base.entity';
import { Board } from './board.entity';
export declare class Bookmark extends BaseEntity {
    category: string;
    postIdx: number;
    userIdx: number;
    board: Board;
}
