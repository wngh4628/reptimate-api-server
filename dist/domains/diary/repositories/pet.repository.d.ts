import { Pet } from 'src/domains/diary/entities/pet.entity';
import { Repository } from 'typeorm';
import { PageRequest } from 'src/core/page';
export declare class PetRepository extends Repository<Pet> {
    findAndCountByUserIdx(userIdx: number, pageRequest: PageRequest): Promise<[Pet[], number]>;
    findByPetIdx(petIdx: number): Promise<Pet>;
}
