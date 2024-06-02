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
var Pet_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const pet_weight_entity_1 = require("./pet-weight.entity");
const diary_entity_1 = require("./diary.entity");
const base_entity_1 = require("../../../core/entity/base.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
const constants_1 = require("../helpers/constants");
let Pet = Pet_1 = class Pet extends base_entity_1.default {
    static from({ name, type, gender, birthDate, adoptionDate, imagePath, }) {
        const pet = new Pet_1();
        pet.name = name;
        pet.type = type;
        pet.gender = gender;
        pet.birthDate = birthDate;
        pet.adoptionDate = adoptionDate;
        pet.imagePath = imagePath;
        return pet;
    }
    updateFromDto(dto) {
        this.name = dto.name;
        this.type = dto.type;
        this.gender = dto.gender;
        this.birthDate = dto.birthDate;
        this.adoptionDate = dto.adoptionDate;
        this.imagePath = dto.imagePath;
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pet.prototype, "userIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pet.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pet.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pet.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        transformer: { to: (value) => value, from: (value) => value },
    }),
    __metadata("design:type", Date)
], Pet.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        transformer: { to: (value) => value, from: (value) => value },
    }),
    __metadata("design:type", Date)
], Pet.prototype, "adoptionDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pet.prototype, "imagePath", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.pets),
    __metadata("design:type", user_entity_1.User)
], Pet.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => diary_entity_1.Diary, (diary) => diary.pet),
    __metadata("design:type", Array)
], Pet.prototype, "diaries", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pet_weight_entity_1.PetWeight, (petWeight) => petWeight.pet),
    __metadata("design:type", Array)
], Pet.prototype, "petWeights", void 0);
Pet = Pet_1 = __decorate([
    (0, typeorm_1.Entity)()
], Pet);
exports.Pet = Pet;
//# sourceMappingURL=pet.entity.js.map