import { BoardAuction } from '../entities/board-auction.entity';
import { BoardCommercial } from '../entities/board-commercial.entity';
import { BoardImage } from '../entities/board-image.entity';
import { LiveStream } from 'src/domains/live_stream/entities/live-stream.entity';
export declare class BoardListDto {
    idx: number;
    userIdx: number;
    category: string;
    title: string;
    thumbnail: string;
    description: string;
    replyCnt: number;
    commentCnt: number;
    writeDate: Date;
    images: BoardImage[];
    boardCommercial: BoardCommercial;
    boardAuction: BoardAuction;
    liveStream: LiveStream;
    hasBookmarked: boolean;
    bookmarkCounts: number;
    UserInfo: {
        idx: number;
        nickname: string;
        profilePath: string;
    };
    status: string;
    view: number;
    static from({ idx, userIdx, title, category, description, createdAt, images, view, commentCnt, thumbnail, }: {
        idx: number;
        userIdx: number;
        view: number;
        title: string;
        category: string;
        description: string;
        createdAt: Date;
        images: BoardImage[];
        commentCnt: number;
        thumbnail: string;
    }): BoardListDto;
}
