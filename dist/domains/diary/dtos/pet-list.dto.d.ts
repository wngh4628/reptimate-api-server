import { Gender } from '../helpers/constants';
import { Pet } from '../entities/pet.entity';
export declare class PetListDto {
    idx: number;
    name: string;
    type: string;
    gender: Gender;
    birthDate: Date;
    adoptionDate: Date;
    imagePath: string;
    constructor(pet: Pet);
}
