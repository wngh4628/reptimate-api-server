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
var Diary_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Diary = void 0;
const base_entity_1 = require("../../../core/entity/base.entity");
const typeorm_1 = require("typeorm");
const pet_entity_1 = require("./pet.entity");
const diary_image_entity_1 = require("./diary-image.entity");
let Diary = Diary_1 = class Diary extends base_entity_1.default {
    static from({ title, content }) {
        const diary = new Diary_1();
        diary.title = title;
        diary.content = content;
        return diary;
    }
    updateFromDto(dto) {
        this.title = dto.title;
        this.content = dto.content;
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Diary.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Diary.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Diary.prototype, "petIdx", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => diary_image_entity_1.DiaryImage, (image) => image.diary),
    __metadata("design:type", Array)
], Diary.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pet_entity_1.Pet, (pet) => pet.diaries),
    (0, typeorm_1.JoinColumn)({ name: 'pet_idx' }),
    __metadata("design:type", pet_entity_1.Pet)
], Diary.prototype, "pet", void 0);
Diary = Diary_1 = __decorate([
    (0, typeorm_1.Entity)()
], Diary);
exports.Diary = Diary;
//# sourceMappingURL=diary.entity.js.map