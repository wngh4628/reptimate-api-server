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
exports.PetResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_pet_dto_1 = require("./create-pet.dto");
class PetResponseDto extends (0, swagger_1.PartialType)(create_pet_dto_1.CreatePetDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '반려동물 인덱스',
        default: 1,
    }),
    __metadata("design:type", Number)
], PetResponseDto.prototype, "idx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '이미지 경로',
        default: null,
    }),
    __metadata("design:type", String)
], PetResponseDto.prototype, "imagePath", void 0);
exports.PetResponseDto = PetResponseDto;
//# sourceMappingURL=pet-response.dto.js.map