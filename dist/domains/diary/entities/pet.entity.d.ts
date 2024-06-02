import { PetWeight } from './pet-weight.entity';
import { Diary } from './diary.entity';
import { UpdatePetDto } from '../dtos/pet-update.dto';
import BaseEntity from 'src/core/entity/base.entity';
import { User } from 'src/domains/user/entities/user.entity';
import { Gender } from '../helpers/constants';
export declare class Pet extends BaseEntity {
    userIdx: number;
    name: string;
    type: string;
    gender: Gender;
    birthDate: Date;
    adoptionDate: Date;
    imagePath: string;
    user: User;
    diaries: Diary[];
    petWeights: PetWeight[];
    static from({ name, type, gender, birthDate, adoptionDate, imagePath, }: {
        name: string;
        type: string;
        gender: Gender;
        birthDate: Date;
        adoptionDate: Date;
        imagePath: string;
    }): Pet;
    updateFromDto(dto: UpdatePetDto): void;
}
