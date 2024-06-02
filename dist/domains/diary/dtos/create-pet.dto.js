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
exports.CreatePetDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const constants_1 = require("../helpers/constants");
class CreatePetDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '반려동물 이름',
        default: '무근이',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePetDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '반려동물 종류',
        default: '크레스티드 게코',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePetDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '반려동물 성별',
        enum: constants_1.Gender,
        default: constants_1.Gender.NONE,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePetDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '출생일',
        default: '2023-04-17',
        type: 'date',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreatePetDto.prototype, "birthDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '입양일',
        type: 'date',
        default: '2023-04-17',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreatePetDto.prototype, "adoptionDate", void 0);
exports.CreatePetDto = CreatePetDto;
//# sourceMappingURL=create-pet.dto.js.map