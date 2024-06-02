import { DiaryListDto } from './diary-list.dto';
declare const DiaryDetailDto_base: import("@nestjs/common").Type<Omit<DiaryListDto, "imagePath">>;
export declare class DiaryDetailDto extends DiaryDetailDto_base {
    imagePaths: string[];
}
export {};
