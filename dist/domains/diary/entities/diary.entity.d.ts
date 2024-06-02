import BaseEntity from 'src/core/entity/base.entity';
import { Pet } from './pet.entity';
import { UpdateDiaryDto } from '../dtos/update-diary.dto';
import { DiaryImage } from './diary-image.entity';
export declare class Diary extends BaseEntity {
    title: string;
    content: string;
    petIdx: number;
    images: DiaryImage[];
    pet: Pet;
    static from({ title, content }: {
        title: string;
        content: string;
    }): Diary;
    updateFromDto(dto: UpdateDiaryDto): void;
}
