"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiaryService = void 0;
const diary_list_dto_1 = require("./dtos/diary-list.dto");
const diary_repository_1 = require("./repositories/diary.repository");
const pet_repository_1 = require("./repositories/pet.repository");
const common_1 = require("@nestjs/common");
const pet_entity_1 = require("./entities/pet.entity");
const page_1 = require("../../core/page");
const http_error_objects_1 = require("../../core/http/http-error-objects");
const s3_utils_1 = require("../../utils/s3-utils");
const date_utils_1 = require("../../utils/date-utils");
const uuid = require("uuid");
const diary_entity_1 = require("./entities/diary.entity");
const diary_image_entity_1 = require("./entities/diary-image.entity");
const diary_image_repository_1 = require("./repositories/diary-image.repository");
const pet_weight_entity_1 = require("./entities/pet-weight.entity");
const pet_weight_repository_1 = require("./repositories/pet-weight.repository");
const pet_weight_list_dto_1 = require("./dtos/pet-weight-list.dto");
const pet_list_dto_1 = require("./dtos/pet-list.dto");
const user_repository_1 = require("../user/repositories/user.repository");
let DiaryService = class DiaryService {
    constructor(userRepository, petRepository, diaryRepository, diaryImageRepository, petWeightRepository) {
        this.userRepository = userRepository;
        this.petRepository = petRepository;
        this.diaryRepository = diaryRepository;
        this.diaryImageRepository = diaryImageRepository;
        this.petWeightRepository = petWeightRepository;
    }
    async createPet(dto, userIdx, file) {
        const pet = pet_entity_1.Pet.from(dto);
        pet.userIdx = userIdx;
        if (file) {
            const imagePath = await this.uploadImageToS3(file, s3_utils_1.S3FolderName.PET);
            pet.imagePath = imagePath;
        }
        return await this.petRepository.save(pet);
    }
    async findAllPets(userIdx, pageRequest) {
        const user = await this.userRepository.findByUserIdx(userIdx);
        if (!user) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_USER);
        }
        const [pets, totalCount] = await this.petRepository.findAndCountByUserIdx(userIdx, pageRequest);
        const items = pets.map((pet) => new pet_list_dto_1.PetListDto(pet));
        return new page_1.Page(totalCount, items, pageRequest);
    }
    async updatePet(petIdx, dto, file) {
        const pet = await this.petRepository.findByPetIdx(petIdx);
        if (!pet) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET);
        }
        if (file) {
            const imagePath = await this.uploadImageToS3(file, s3_utils_1.S3FolderName.PET);
            dto.imagePath = imagePath;
        }
        pet.updateFromDto(dto);
        const result = await this.petRepository.save(pet);
        return result;
    }
    async removePet(petIdx) {
        const pet = await this.petRepository.findByPetIdx(petIdx);
        if (!pet) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET);
        }
        await this.petRepository.softDelete(petIdx);
    }
    async uploadImageToS3(file, folder) {
        const fileName = `${date_utils_1.default.momentFile()}-${uuid.v4()}-${file.originalname}`;
        const fileKey = `${folder}/${fileName}`;
        const result = await (0, s3_utils_1.asyncUploadToS3)(fileKey, file.buffer);
        return result.Location;
    }
    async createDiary(petIdx, dto, files) {
        const pet = await this.petRepository.findByPetIdx(petIdx);
        if (!pet) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET);
        }
        const diary = diary_entity_1.Diary.from(dto);
        diary.petIdx = petIdx;
        await this.diaryRepository.save(diary);
        if (files) {
            const images = await this.uploadDiaryImages(files, diary.idx);
            diary.images = images;
        }
        return diary;
    }
    async findAllDiaries(petIdx, pageRequest) {
        const pet = await this.petRepository.findByPetIdx(petIdx);
        if (!pet) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET);
        }
        const [diaries, totalCount] = await this.diaryRepository.findAndCountByPetIdx(petIdx, pageRequest);
        const items = diaries.map((diary) => new diary_list_dto_1.DiaryListDto(diary));
        return new page_1.Page(totalCount, items, pageRequest);
    }
    async findDiary(petIdx, diaryIdx) {
        const pet = await this.petRepository.findByPetIdx(petIdx);
        if (!pet) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET);
        }
        const diary = await this.diaryRepository.findOne({
            where: {
                idx: diaryIdx,
            },
            relations: ['images'],
        });
        if (!diary) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_DIARY);
        }
        return diary;
    }
    async updateDiary(diaryIdx, dto, files) {
        const diary = await this.diaryRepository.findOne({
            where: {
                idx: diaryIdx,
            },
            relations: ['images'],
        });
        if (!diary) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_DIARY);
        }
        if (files) {
            await this.deleteDiaryImages(diary.images);
            const images = await this.uploadDiaryImages(files, diaryIdx);
            diary.images = images;
        }
        diary.updateFromDto(dto);
        await this.diaryRepository.save(diary);
        return Object.assign(Object.assign({}, diary), { images: diary.images.filter((image) => !image.deletedAt) });
    }
    async removeDiary(diaryIdx) {
        const diary = await this.diaryRepository.findOne({
            where: {
                idx: diaryIdx,
            },
            relations: ['images'],
        });
        if (!diary) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_DIARY);
        }
        if (diary.images) {
            await this.deleteDiaryImages(diary.images);
        }
        await this.diaryRepository.softDelete(diaryIdx);
    }
    async uploadDiaryImages(files, diaryIdx) {
        const images = [];
        for (const file of files) {
            const url = await this.uploadImageToS3(file, s3_utils_1.S3FolderName.DIARY);
            const image = new diary_image_entity_1.DiaryImage();
            image.diaryIdx = diaryIdx;
            image.imagePath = url;
            images.push(image);
        }
        await this.diaryImageRepository.save(images);
        return images;
    }
    async deleteDiaryImages(images) {
        for (const image of images) {
            await this.diaryImageRepository.softRemove(image);
        }
    }
    async createPetWeight(petIdx, dto) {
        const pet = await this.petRepository.findByPetIdx(petIdx);
        if (!pet) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET);
        }
        const existDate = await this.petWeightRepository.checkExistDate(pet.idx, dto.date);
        if (existDate) {
            throw new common_1.ConflictException(http_error_objects_1.HttpErrorConstants.EXIST_DATE);
        }
        const weight = pet_weight_entity_1.PetWeight.from(dto);
        weight.petIdx = petIdx;
        const result = await this.petWeightRepository.save(weight);
        return result;
    }
    async findPetWeights(petIdx, pageRequest) {
        const pet = await this.petRepository.findByPetIdx(petIdx);
        if (!pet) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET);
        }
        if (pageRequest.filter === 'year') {
            const result = await this.petWeightRepository.getMonthlyAverageInYear(petIdx);
            return result;
        }
        const [weights, totalCount] = await this.petWeightRepository.findAndCountByPetIdx(petIdx, pageRequest);
        const items = weights.map((weight, index) => {
            var _a;
            const prevWeight = (_a = weights[index + 1]) === null || _a === void 0 ? void 0 : _a.weight;
            const weightChange = prevWeight ? weight.weight - prevWeight : 0;
            return new pet_weight_list_dto_1.PetWeightListDto(weight, weightChange);
        });
        return new page_1.Page(totalCount, items, pageRequest);
    }
    async updatePetWeight(weightIdx, dto) {
        const petWeight = await this.petWeightRepository.findOne({
            where: {
                idx: weightIdx,
            },
        });
        if (!petWeight) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_WEIGHT);
        }
        if (dto.date) {
            const existDate = await this.petWeightRepository.checkExistDate(petWeight.petIdx, dto.date);
            if (existDate) {
                throw new common_1.ConflictException(http_error_objects_1.HttpErrorConstants.EXIST_DATE);
            }
        }
        petWeight.updateFromDto(dto);
        const result = await this.petWeightRepository.save(petWeight);
        return result;
    }
    async removePetWeight(weightIdx) {
        const petWeight = await this.petWeightRepository.findOne({
            where: {
                idx: weightIdx,
            },
        });
        if (!petWeight) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_WEIGHT);
        }
        await this.petWeightRepository.softDelete(petWeight.idx);
    }
};
DiaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        pet_repository_1.PetRepository,
        diary_repository_1.DiaryRepository,
        diary_image_repository_1.DiaryImageRepository,
        pet_weight_repository_1.PetWeightRepository])
], DiaryService);
exports.DiaryService = DiaryService;
//# sourceMappingURL=diary.service.js.map