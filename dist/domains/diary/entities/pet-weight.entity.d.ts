import { UpdatePetWeightDto } from './../dtos/update-pet-weight.dto';
import BaseEntity from 'src/core/entity/base.entity';
import { Pet } from './pet.entity';
export declare class PetWeight extends BaseEntity {
    petIdx: number;
    weight: number;
    date: Date;
    pet: Pet;
    static from({ weight, date }: {
        weight: number;
        date: Date;
    }): PetWeight;
    updateFromDto(dto: UpdatePetWeightDto): void;
}
