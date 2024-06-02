import { Repository } from 'typeorm';
import { PageRequest } from 'src/core/page';
import BoardComment from '../entities/board-comment.entity';
export declare class BoardCommentRepository extends Repository<BoardComment> {
    findAndCountByBoardIdx(pageRequest: PageRequest, boardIdx: number): Promise<[BoardComment[], number]>;
    updateReplyCnt(commentIdx: number, replyCnt: number): void;
}
