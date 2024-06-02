export declare class CommentDto {
    boardIdx: number;
    category: string;
    commentIdx: number;
    description: string;
}
export declare class ReplyDto extends CommentDto {
    commentIdx: number;
    UserInfo: {
        idx: number;
        nickname: string;
        profilePath: string;
    };
}
