import { PetWeight } from './../entities/pet-weight.entity';
import { CreatePetWeightDto } from './create-pet-weight.dto';
declare const PetWeightListDto_base: import("@nestjs/common").Type<Partial<CreatePetWeightDto>>;
export declare class PetWeightListDto extends PetWeightListDto_base {
    idx: number;
    weightChange: number;
    constructor(petWeight: PetWeight, weightChange: number);
}
export {};
