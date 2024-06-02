import BaseEntity from 'src/core/entity/base.entity';
export default class BoardReply extends BaseEntity {
    userIdx: number;
    boardIdx: number;
    commentIdx: number;
    boardState: string;
    filePath: string;
    description: string;
    UserInfo: {
        idx: number;
        nickname: string;
        profilePath: string;
    };
    static from({ boardIdx, description, commentIdx, }: {
        boardIdx: number;
        description: string;
        commentIdx: number;
    }): BoardReply;
}
