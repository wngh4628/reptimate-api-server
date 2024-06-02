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
exports.PetWeightListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_pet_weight_dto_1 = require("./create-pet-weight.dto");
class PetWeightListDto extends (0, swagger_1.PartialType)(create_pet_weight_dto_1.CreatePetWeightDto) {
    constructor(petWeight, weightChange) {
        super();
        this.idx = petWeight.idx;
        this.weight = petWeight.weight;
        this.date = petWeight.date;
        this.weightChange = weightChange;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '인덱스',
        default: 1,
    }),
    __metadata("design:type", Number)
], PetWeightListDto.prototype, "idx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '인덱스',
        default: 1,
    }),
    __metadata("design:type", Number)
], PetWeightListDto.prototype, "weightChange", void 0);
exports.PetWeightListDto = PetWeightListDto;
//# sourceMappingURL=pet-weight-list.dto.js.map