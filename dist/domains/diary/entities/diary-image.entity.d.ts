import { Diary } from './diary.entity';
import BaseEntity from 'src/core/entity/base.entity';
export declare class DiaryImage extends BaseEntity {
    diaryIdx: number;
    imagePath: string;
    diary: Diary;
}
