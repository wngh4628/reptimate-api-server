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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiaryController = void 0;
const diary_detail_dto_1 = require("./dtos/diary-detail-dto");
const pet_update_dto_1 = require("./dtos/pet-update.dto");
const user_entity_1 = require("../user/entities/user.entity");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_user_decorator_1 = require("../../core/decorators/auth-user.decorator");
const http_response_1 = require("../../core/http/http-response");
const use_auth_1 = require("../auth/auth-guards/use-auth");
const diary_service_1 = require("./diary.service");
const create_diary_dto_1 = require("./dtos/create-diary.dto");
const create_pet_dto_1 = require("./dtos/create-pet.dto");
const update_diary_dto_1 = require("./dtos/update-diary.dto");
const pet_list_dto_1 = require("./dtos/pet-list.dto");
const swagger_tags_1 = require("../../core/swagger/swagger-tags");
const page_1 = require("../../core/page");
const api_ok_response_1 = require("../../core/swagger/api-ok-response");
const platform_express_1 = require("@nestjs/platform-express");
const diary_list_dto_1 = require("./dtos/diary-list.dto");
const api_created_response_1 = require("../../core/swagger/api-created-response");
const api_error_common_response_1 = require("../../core/swagger/api-error-common-response");
const pet_response_dto_1 = require("./dtos/pet-response.dto");
const apt_error_response_1 = require("../../core/swagger/apt-error-response");
const http_status_codes_1 = require("http-status-codes");
const http_error_objects_1 = require("../../core/http/http-error-objects");
const api_ok_pagination_response_1 = require("../../core/swagger/api-ok-pagination-response");
const create_pet_weight_dto_1 = require("./dtos/create-pet-weight.dto");
const pet_weight_list_dto_1 = require("./dtos/pet-weight-list.dto");
const update_pet_weight_dto_1 = require("./dtos/update-pet-weight.dto");
const pet_weight_page_1 = require("./dtos/pet-weight-page");
let DiaryController = class DiaryController {
    constructor(diaryService) {
        this.diaryService = diaryService;
    }
    async createPet(res, dto, user, file) {
        const pet = await this.diaryService.createPet(dto, user.idx, file);
        return http_response_1.default.created(res, { body: pet });
    }
    async findAllPets(res, user, pageRequest) {
        const pets = await this.diaryService.findAllPets(user.idx, pageRequest);
        return http_response_1.default.ok(res, pets);
    }
    async updatePet(res, petIdx, dto, file) {
        const pet = await this.diaryService.updatePet(petIdx, dto, file);
        return http_response_1.default.ok(res, pet);
    }
    async removePet(res, petIdx) {
        await this.diaryService.removePet(petIdx);
        return http_response_1.default.ok(res);
    }
    async createDiary(res, petIdx, dto, files) {
        const diary = await this.diaryService.createDiary(petIdx, dto, files);
        return http_response_1.default.created(res, { body: diary });
    }
    async findAllDiaries(res, petIdx, pageRequest) {
        const diaries = await this.diaryService.findAllDiaries(petIdx, pageRequest);
        return http_response_1.default.ok(res, diaries);
    }
    async findDiary(res, petIdx, diaryIdx) {
        const diary = await this.diaryService.findDiary(petIdx, diaryIdx);
        return http_response_1.default.ok(res, diary);
    }
    async updateDiary(res, diaryIdx, dto, files) {
        const diary = await this.diaryService.updateDiary(diaryIdx, dto, files);
        return http_response_1.default.ok(res, diary);
    }
    async removeDiary(res, diaryIdx) {
        await this.diaryService.removeDiary(diaryIdx);
        return http_response_1.default.ok(res);
    }
    async createWeight(res, petIdx, dto) {
        const result = await this.diaryService.createPetWeight(petIdx, dto);
        return http_response_1.default.created(res, { body: result });
    }
    async findAllWeights(res, petIdx, pageRequest) {
        const result = await this.diaryService.findPetWeights(petIdx, pageRequest);
        return http_response_1.default.ok(res, result);
    }
    async updatePetWeight(res, weightIdx, dto) {
        const result = await this.diaryService.updatePetWeight(weightIdx, dto);
        return http_response_1.default.ok(res, result);
    }
    async removePetWeight(res, weightIdx) {
        await this.diaryService.removePetWeight(weightIdx);
        return http_response_1.default.ok(res);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '반려동물 정보 등록',
        description: '다이어리를 작성할 반려동물의 정보를 등록한다.',
    }),
    (0, swagger_1.ApiBody)({ type: create_pet_dto_1.CreatePetDto }),
    (0, api_created_response_1.ApiCreatedResponseTemplate)({ type: pet_response_dto_1.PetResponseDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, use_auth_1.default)(),
    (0, common_1.Post)('/pet'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, auth_user_decorator_1.default)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_pet_dto_1.CreatePetDto,
        user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "createPet", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '반려동물 목록 조회',
        description: '다이어리를 작성할 반려동물의 목록을 조회한다.',
    }),
    (0, api_ok_pagination_response_1.ApiOkPaginationResponseTemplate)({ type: pet_list_dto_1.PetListDto }),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/pet'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User,
        page_1.PageRequest]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "findAllPets", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '반려동물 정보 수정',
        description: '반려동물의 정보를 수정한다.',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)({ type: pet_update_dto_1.UpdatePetDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET],
        },
    ]),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, use_auth_1.default)(),
    (0, common_1.Patch)('/pet/:petIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('petIdx')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, pet_update_dto_1.UpdatePetDto, Object]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "updatePet", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '반려동물 정보 삭제',
        description: '반려동물 정보를 삭제한다. ',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)(),
    (0, use_auth_1.default)(),
    (0, common_1.Delete)('/pet/:petIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('petIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "removePet", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '다이어리 등록',
        description: '선택한 반려동물의 다이어리를 등록한다.',
    }),
    (0, api_created_response_1.ApiCreatedResponseTemplate)({ type: diary_detail_dto_1.DiaryDetailDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET],
        },
    ]),
    (0, swagger_1.ApiBody)({ type: create_diary_dto_1.CreateDiaryDto }),
    (0, use_auth_1.default)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 5)),
    (0, common_1.Post)('/:petIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('petIdx')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, create_diary_dto_1.CreateDiaryDto,
        Array]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "createDiary", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '다이어리 목록 조회',
        description: '선택한 반려동물의 다이어리 목록을 조회한다.',
    }),
    (0, api_ok_pagination_response_1.ApiOkPaginationResponseTemplate)({ type: diary_list_dto_1.DiaryListDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/:petIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('petIdx')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, page_1.PageRequest]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "findAllDiaries", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '다이어리 상세조회',
        description: '다이어리를 조회한다.',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)({ type: diary_detail_dto_1.DiaryDetailDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [
                http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET,
                http_error_objects_1.HttpErrorConstants.CANNOT_FIND_DIARY,
            ],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/:petIdx/:diaryIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('petIdx')),
    __param(2, (0, common_1.Param)('diaryIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "findDiary", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '다이어리 수정',
        description: '다이어리를 수정한다.',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)({ type: diary_detail_dto_1.DiaryDetailDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_DIARY],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 5)),
    (0, common_1.Patch)('/:diaryIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('diaryIdx')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_diary_dto_1.UpdateDiaryDto,
        Array]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "updateDiary", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '다이어리 삭제',
        description: '다이어리를 삭제한다. ',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)(),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_DIARY],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Delete)('/:diaryIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('diaryIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "removeDiary", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '반려동물 체중 등록',
        description: '선택한 반려동물의 체중을 등록한다.',
    }),
    (0, api_created_response_1.ApiCreatedResponseTemplate)({ type: create_pet_weight_dto_1.CreatePetWeightDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Post)('/pet/:petIdx/weight'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('petIdx')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, create_pet_weight_dto_1.CreatePetWeightDto]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "createWeight", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '반려동물 체중 목록 조회',
        description: '반려동물의 체중 목록을 조회한다.',
    }),
    (0, api_ok_pagination_response_1.ApiOkPaginationResponseTemplate)({ type: pet_weight_list_dto_1.PetWeightListDto }),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/pet/:petIdx/weight'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('petIdx')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, pet_weight_page_1.PetWeightPageRequest]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "findAllWeights", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '반려동물 체중 수정',
        description: '반려동물의 체중을 수정한다.',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)({ type: update_pet_weight_dto_1.UpdatePetWeightDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_WEIGHT],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Patch)('/weight/:weightIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('weightIdx')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_pet_weight_dto_1.UpdatePetWeightDto]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "updatePetWeight", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '반려동물 체중 삭제',
        description: '반려동물의 체중을 삭제한다. ',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)(),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_WEIGHT],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Delete)('/weight/:weightIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('weightIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "removePetWeight", null);
DiaryController = __decorate([
    (0, swagger_1.ApiTags)(swagger_tags_1.SwaggerTag.DIARY),
    (0, api_error_common_response_1.ApiCommonErrorResponseTemplate)(),
    (0, common_1.Controller)('/diaries'),
    __metadata("design:paramtypes", [diary_service_1.DiaryService])
], DiaryController);
exports.DiaryController = DiaryController;
//# sourceMappingURL=diary.controller.js.map