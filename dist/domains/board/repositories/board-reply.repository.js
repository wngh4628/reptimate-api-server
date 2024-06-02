"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardReplyRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_ex_decorator_1 = require("../../../core/decorators/typeorm-ex.decorator");
const board_reply_entity_1 = require("../entities/board-reply.entity");
let BoardReplyRepository = class BoardReplyRepository extends typeorm_1.Repository {
    findAndCountByBoardIdx(pageRequest, commentIdx) {
        return this.createQueryBuilder('reply')
            .where('reply.commentIdx = :commentIdx', { commentIdx })
            .orderBy('idx', pageRequest.order)
            .take(pageRequest.limit)
            .skip(pageRequest.offset)
            .getManyAndCount();
    }
    findMyComment(pageRequest, userIdx) {
        return this.createQueryBuilder('reply')
            .where('reply.userIdx = :userIdx', { userIdx })
            .orderBy('idx', pageRequest.order)
            .take(pageRequest.limit / 2)
            .skip(pageRequest.offset)
            .getManyAndCount();
    }
};
BoardReplyRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(board_reply_entity_1.default)
], BoardReplyRepository);
exports.BoardReplyRepository = BoardReplyRepository;
//# sourceMappingURL=board-reply.repository.js.map