import { Gender } from '../helpers/constants';
export declare class CreatePetDto {
    name: string;
    type: string;
    gender: Gender;
    birthDate: Date;
    adoptionDate: Date;
    imagePath: string;
}
