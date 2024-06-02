import { Repository } from 'typeorm';
import { PageRequest } from 'src/core/page';
import BoardReply from '../entities/board-reply.entity';
export declare class BoardReplyRepository extends Repository<BoardReply> {
    findAndCountByBoardIdx(pageRequest: PageRequest, commentIdx: number): Promise<[BoardReply[], number]>;
    findMyComment(pageRequest: PageRequest, userIdx: number): Promise<[BoardReply[], number]>;
}
