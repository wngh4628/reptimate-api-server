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
exports.ValueAnalyzer = void 0;
const base_entity_1 = require("../../../core/entity/base.entity");
const typeorm_1 = require("typeorm");
let ValueAnalyzer = class ValueAnalyzer extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ValueAnalyzer.prototype, "userIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ValueAnalyzer.prototype, "petName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ValueAnalyzer.prototype, "morph", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ValueAnalyzer.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ValueAnalyzer.prototype, "headScore", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ValueAnalyzer.prototype, "dorsalScore", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ValueAnalyzer.prototype, "tailScore", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ValueAnalyzer.prototype, "leftScore", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ValueAnalyzer.prototype, "rightScore", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ValueAnalyzer.prototype, "leftInfo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ValueAnalyzer.prototype, "rightInfo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ValueAnalyzer.prototype, "totalScore", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ValueAnalyzer.prototype, "topImg", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ValueAnalyzer.prototype, "leftImg", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ValueAnalyzer.prototype, "rightImg", void 0);
ValueAnalyzer = __decorate([
    (0, typeorm_1.Entity)()
], ValueAnalyzer);
exports.ValueAnalyzer = ValueAnalyzer;
//# sourceMappingURL=value-analyzer.entity.js.map