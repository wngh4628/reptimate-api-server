import BaseEntity from 'src/core/entity/base.entity';
export default class BoardComment extends BaseEntity {
    userIdx: number;
    boardIdx: number;
    boardState: string;
    filePath: string;
    description: string;
    replyCnt: number;
    UserInfo: {
        idx: number;
        nickname: string;
        profilePath: string;
    };
    title: string;
    category: string;
    boardCategory: string;
    static from({ boardIdx, description, }: {
        boardIdx: number;
        description: string;
    }): BoardComment;
    static updateFrom({ boardIdx, idx, description, }: {
        boardIdx: number;
        description: string;
        idx: number;
    }): BoardComment;
    static myPage({ idx, category, board_idx, file_path, user_idx, description, created_at, updated_at, deleted_at, }: {
        idx: number;
        category: string;
        board_idx: number;
        file_path: string;
        user_idx: number;
        boardIdx: number;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        description: string;
    }): BoardComment;
}
