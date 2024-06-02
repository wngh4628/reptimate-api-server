"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardCommercialRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_ex_decorator_1 = require("../../../core/decorators/typeorm-ex.decorator");
const board_commercial_entity_1 = require("../entities/board-commercial.entity");
let BoardCommercialRepository = class BoardCommercialRepository extends typeorm_1.Repository {
    async findRecommendItem(morph, sequence) {
        const boards = await this.createQueryBuilder('boardCommercial')
            .leftJoinAndSelect('boardCommercial.board', 'board')
            .leftJoinAndSelect('board.user', 'user')
            .where('boardCommercial.pattern = :pattern', { pattern: morph })
            .andWhere('board.category = :category', { category: 'adoption' })
            .andWhere('boardCommercial.state = :state', { state: 'selling' })
            .orderBy('board.view', 'DESC')
            .take(sequence)
            .getMany();
        const processedBoards = boards.map((boardCommercial) => {
            const { idx, nickname } = boardCommercial.board.user;
            const _a = boardCommercial.board, { user } = _a, restBoard = __rest(_a, ["user"]);
            const processedBoardCommercial = Object.assign(Object.assign({}, boardCommercial), { user: {
                    idx,
                    nickname,
                }, board: restBoard });
            return processedBoardCommercial;
        });
        return processedBoards;
    }
    async findExtraItems(sequence) {
        const boards = await this.createQueryBuilder('boardCommercial')
            .leftJoinAndSelect('boardCommercial.board', 'board')
            .leftJoinAndSelect('board.user', 'user')
            .where('boardCommercial.state = :state', { state: 'selling' })
            .orderBy('board.view', 'DESC')
            .take(sequence)
            .getMany();
        const processedBoards = boards.map((boardCommercial) => {
            const { idx, nickname } = boardCommercial.board.user;
            const _a = boardCommercial.board, { user } = _a, restBoard = __rest(_a, ["user"]);
            const processedBoardCommercial = Object.assign(Object.assign({}, boardCommercial), { user: {
                    idx,
                    nickname,
                }, board: restBoard });
            return processedBoardCommercial;
        });
        return processedBoards;
    }
};
BoardCommercialRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(board_commercial_entity_1.BoardCommercial)
], BoardCommercialRepository);
exports.BoardCommercialRepository = BoardCommercialRepository;
//# sourceMappingURL=board-commercial.repository.js.map