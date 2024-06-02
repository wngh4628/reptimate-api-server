"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardCommentRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_ex_decorator_1 = require("../../../core/decorators/typeorm-ex.decorator");
const board_comment_entity_1 = require("../entities/board-comment.entity");
let BoardCommentRepository = class BoardCommentRepository extends typeorm_1.Repository {
    findAndCountByBoardIdx(pageRequest, boardIdx) {
        return this.createQueryBuilder('comment')
            .where('comment.boardIdx = :boardIdx', { boardIdx })
            .orderBy('idx', pageRequest.order)
            .take(pageRequest.limit)
            .skip(pageRequest.offset)
            .getManyAndCount();
    }
    updateReplyCnt(commentIdx, replyCnt) {
        this.createQueryBuilder()
            .update(board_comment_entity_1.default)
            .set({ replyCnt })
            .where('idx = :commentIdx', { commentIdx })
            .execute();
    }
};
BoardCommentRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(board_comment_entity_1.default)
], BoardCommentRepository);
exports.BoardCommentRepository = BoardCommentRepository;
//# sourceMappingURL=board-comment.repository.js.map