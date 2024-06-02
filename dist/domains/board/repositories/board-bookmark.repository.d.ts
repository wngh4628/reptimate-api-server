import { Repository } from 'typeorm';
import { Bookmark } from '../entities/board-bookmark.entity';
import { PageRequest } from 'src/core/page';
export declare class BoardBookmarkRepository extends Repository<Bookmark> {
    findMyBid(pageRequest: PageRequest, userIdx: number, category: string): Promise<[Bookmark[], number]>;
    findBookmark(userIdx: number, boardIdx: number): Promise<Bookmark>;
    countBookmarks(boardIdx: number): Promise<number>;
}
