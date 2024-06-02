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
var BoardAuction_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardAuction = void 0;
const base_entity_1 = require("../../../core/entity/base.entity");
const typeorm_1 = require("typeorm");
const board_entity_1 = require("./board.entity");
let BoardAuction = BoardAuction_1 = class BoardAuction extends base_entity_1.default {
    static from(boardIdx, buyPrice, startPrice, unit, extensionRule, gender, size, variety, pattern, birthDate, state) {
        const boardAuction = new BoardAuction_1();
        boardAuction.boardIdx = boardIdx;
        boardAuction.buyPrice = buyPrice;
        boardAuction.startPrice = startPrice;
        boardAuction.unit = unit;
        boardAuction.extensionRule = extensionRule;
        boardAuction.gender = gender;
        boardAuction.size = size;
        boardAuction.variety = variety;
        boardAuction.pattern = pattern;
        boardAuction.birthDate = birthDate;
        boardAuction.state = state;
        return boardAuction;
    }
    static updateForm(idx, boardIdx, buyPrice, startPrice, unit, extensionRule, gender, size, variety, pattern, birthDate, state, streamKey) {
        const boardAuction = new BoardAuction_1();
        boardAuction.idx = idx;
        boardAuction.boardIdx = boardIdx;
        boardAuction.buyPrice = buyPrice;
        boardAuction.startPrice = startPrice;
        boardAuction.unit = unit;
        boardAuction.extensionRule = extensionRule;
        boardAuction.gender = gender;
        boardAuction.size = size;
        boardAuction.variety = variety;
        boardAuction.pattern = pattern;
        boardAuction.birthDate = birthDate;
        boardAuction.state = state;
        boardAuction.streamKey = streamKey;
        return boardAuction;
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BoardAuction.prototype, "boardIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BoardAuction.prototype, "buyPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BoardAuction.prototype, "startPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BoardAuction.prototype, "currentPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BoardAuction.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BoardAuction.prototype, "alertTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BoardAuction.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BoardAuction.prototype, "extensionTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BoardAuction.prototype, "extensionRule", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 45,
    }),
    __metadata("design:type", String)
], BoardAuction.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 45,
    }),
    __metadata("design:type", String)
], BoardAuction.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 300,
    }),
    __metadata("design:type", String)
], BoardAuction.prototype, "variety", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], BoardAuction.prototype, "pattern", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 40,
    }),
    __metadata("design:type", String)
], BoardAuction.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 40,
    }),
    __metadata("design:type", String)
], BoardAuction.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 150,
    }),
    __metadata("design:type", String)
], BoardAuction.prototype, "streamKey", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => board_entity_1.Board),
    (0, typeorm_1.JoinColumn)({ name: 'board_idx', referencedColumnName: 'idx' }),
    __metadata("design:type", board_entity_1.Board)
], BoardAuction.prototype, "board", void 0);
BoardAuction = BoardAuction_1 = __decorate([
    (0, typeorm_1.Entity)()
], BoardAuction);
exports.BoardAuction = BoardAuction;
//# sourceMappingURL=board-auction.entity.js.map