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
exports.PetListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../helpers/constants");
const class_validator_1 = require("class-validator");
class PetListDto {
    constructor(pet) {
        this.idx = pet.idx;
        this.name = pet.name;
        this.type = pet.type;
        this.gender = pet.gender;
        this.birthDate = pet.birthDate;
        this.adoptionDate = pet.adoptionDate;
        this.imagePath = pet.imagePath;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '반려동물 인덱스',
        default: 1,
    }),
    __metadata("design:type", Number)
], PetListDto.prototype, "idx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '반려동물 이름',
        default: '무근이',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PetListDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '반려동물 종류',
        default: '크레스티드 게코',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PetListDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `성별
- NONE: 미구분
- MALE: 수컷
- FEMALE: 암컷`,
        enum: constants_1.Gender,
        default: constants_1.Gender.MALE,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PetListDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '출생일',
        default: '2023-04-18',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], PetListDto.prototype, "birthDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '입양일',
        default: '2023-04-18',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], PetListDto.prototype, "adoptionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '이미지 url',
        default: null,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PetListDto.prototype, "imagePath", void 0);
exports.PetListDto = PetListDto;
//# sourceMappingURL=pet-list.dto.js.map