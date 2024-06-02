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
var PetWeight_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetWeight = void 0;
const base_entity_1 = require("../../../core/entity/base.entity");
const typeorm_1 = require("typeorm");
const pet_entity_1 = require("./pet.entity");
let PetWeight = PetWeight_1 = class PetWeight extends base_entity_1.default {
    static from({ weight, date }) {
        const petWeight = new PetWeight_1();
        petWeight.weight = parseFloat(weight.toFixed(2));
        petWeight.date = date;
        return petWeight;
    }
    updateFromDto(dto) {
        this.weight = parseFloat(dto.weight.toFixed(2));
        this.date = dto.date;
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PetWeight.prototype, "petIdx", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], PetWeight.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        transformer: { to: (value) => value, from: (value) => value },
    }),
    __metadata("design:type", Date)
], PetWeight.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pet_entity_1.Pet, (pet) => pet.petWeights),
    (0, typeorm_1.JoinColumn)({ name: 'pet_idx' }),
    __metadata("design:type", pet_entity_1.Pet)
], PetWeight.prototype, "pet", void 0);
PetWeight = PetWeight_1 = __decorate([
    (0, typeorm_1.Entity)()
], PetWeight);
exports.PetWeight = PetWeight;
//# sourceMappingURL=pet-weight.entity.js.map