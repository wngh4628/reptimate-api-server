import { PageRequest } from 'src/core/page';
import { Diary } from './../entities/diary.entity';
import { Repository } from 'typeorm';
export declare class DiaryRepository extends Repository<Diary> {
    findAndCountByPetIdx(petIdx: number, pageRequest: PageRequest): Promise<[Diary[], number]>;
}
