/// <reference types="multer" />
/// <reference types="express" />
import { UpdatePetDto } from './dtos/pet-update.dto';
import { User } from 'src/domains/user/entities/user.entity';
import { DiaryService } from './diary.service';
import { CreateDiaryDto } from './dtos/create-diary.dto';
import { CreatePetDto } from './dtos/create-pet.dto';
import { UpdateDiaryDto } from './dtos/update-diary.dto';
import { PageRequest } from 'src/core/page';
import { CreatePetWeightDto } from './dtos/create-pet-weight.dto';
import { UpdatePetWeightDto } from './dtos/update-pet-weight.dto';
import { PetWeightPageRequest } from './dtos/pet-weight-page';
export declare class DiaryController {
    private readonly diaryService;
    constructor(diaryService: DiaryService);
    createPet(res: any, dto: CreatePetDto, user: User, file: Express.Multer.File): Promise<import("express").Response<unknown, Record<string, any>>>;
    findAllPets(res: any, user: User, pageRequest: PageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
    updatePet(res: any, petIdx: number, dto: UpdatePetDto, file: Express.Multer.File): Promise<import("express").Response<unknown, Record<string, any>>>;
    removePet(res: any, petIdx: number): Promise<import("express").Response<unknown, Record<string, any>>>;
    createDiary(res: any, petIdx: number, dto: CreateDiaryDto, files: Array<Express.Multer.File>): Promise<import("express").Response<unknown, Record<string, any>>>;
    findAllDiaries(res: any, petIdx: number, pageRequest: PageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
    findDiary(res: any, petIdx: number, diaryIdx: number): Promise<import("express").Response<unknown, Record<string, any>>>;
    updateDiary(res: any, diaryIdx: number, dto: UpdateDiaryDto, files: Array<Express.Multer.File>): Promise<import("express").Response<unknown, Record<string, any>>>;
    removeDiary(res: any, diaryIdx: number): Promise<import("express").Response<unknown, Record<string, any>>>;
    createWeight(res: any, petIdx: number, dto: CreatePetWeightDto): Promise<import("express").Response<unknown, Record<string, any>>>;
    findAllWeights(res: any, petIdx: number, pageRequest: PetWeightPageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
    updatePetWeight(res: any, weightIdx: number, dto: UpdatePetWeightDto): Promise<import("express").Response<unknown, Record<string, any>>>;
    removePetWeight(res: any, weightIdx: number): Promise<import("express").Response<unknown, Record<string, any>>>;
}
