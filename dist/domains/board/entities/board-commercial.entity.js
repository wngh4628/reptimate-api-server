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
var BoardCommercial_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardCommercial = void 0;
const base_entity_1 = require("../../../core/entity/base.entity");
const typeorm_1 = require("typeorm");
const board_entity_1 = require("./board.entity");
let BoardCommercial = BoardCommercial_1 = class BoardCommercial extends base_entity_1.default {
    static from(boardIdx, gender, price, size, variety, pattern, birthDate) {
        const boardCommercial = new BoardCommercial_1();
        boardCommercial.boardIdx = boardIdx;
        boardCommercial.gender = gender;
        boardCommercial.size = size;
        boardCommercial.price = price;
        boardCommercial.variety = variety;
        boardCommercial.pattern = pattern;
        boardCommercial.birthDate = birthDate;
        return boardCommercial;
    }
    static updateFrom(idx, boardIdx, gender, price, size, variety, pattern, birthDate, state) {
        const boardCommercial = new BoardCommercial_1();
        boardCommercial.idx = idx;
        boardCommercial.boardIdx = boardIdx;
        boardCommercial.gender = gender;
        boardCommercial.size = size;
        boardCommercial.price = price;
        boardCommercial.variety = variety;
        boardCommercial.pattern = pattern;
        boardCommercial.birthDate = birthDate;
        boardCommercial.state = state;
        return boardCommercial;
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BoardCommercial.prototype, "boardIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BoardCommercial.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BoardCommercial.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BoardCommercial.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BoardCommercial.prototype, "variety", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BoardCommercial.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], BoardCommercial.prototype, "pattern", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 40,
    }),
    __metadata("design:type", String)
], BoardCommercial.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => board_entity_1.Board),
    (0, typeorm_1.JoinColumn)({ name: 'board_idx', referencedColumnName: 'idx' }),
    __metadata("design:type", board_entity_1.Board)
], BoardCommercial.prototype, "board", void 0);
BoardCommercial = BoardCommercial_1 = __decorate([
    (0, typeorm_1.Entity)()
], BoardCommercial);
exports.BoardCommercial = BoardCommercial;
//# sourceMappingURL=board-commercial.entity.js.map