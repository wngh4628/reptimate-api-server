import { CreatePetDto } from './create-pet.dto';
declare const PetResponseDto_base: import("@nestjs/common").Type<Partial<CreatePetDto>>;
export declare class PetResponseDto extends PetResponseDto_base {
    idx: number;
    imagePath: string;
}
export {};
