import { Repository } from 'typeorm';
import { PetWeightPageRequest } from '../dtos/pet-weight-page';
import { PetWeight } from '../entities/pet-weight.entity';
export declare class PetWeightRepository extends Repository<PetWeight> {
    checkExistDate(petIdx: number, date: Date): Promise<boolean>;
    findAndCountByPetIdx(petIdx: number, pageRequest: PetWeightPageRequest): Promise<[PetWeight[], number]>;
    getMonthlyAverageInYear(petIdx: number): Promise<any[]>;
}
