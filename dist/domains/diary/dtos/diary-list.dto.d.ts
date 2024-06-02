import { Diary } from '../entities/diary.entity';
export declare class DiaryListDto {
    idx: number;
    title: string;
    content: string;
    imagePath: string;
    createdAt: Date;
    constructor(diary: Diary);
}
