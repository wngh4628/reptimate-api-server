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
var BoardComment_1;
Object.defineProperty(exports, "__esModule", { value: true });
const base_entity_1 = require("../../../core/entity/base.entity");
const typeorm_1 = require("typeorm");
let BoardComment = BoardComment_1 = class BoardComment extends base_entity_1.default {
    static from({ boardIdx, description, }) {
        const comment = new BoardComment_1();
        comment.boardIdx = boardIdx;
        comment.description = description;
        return comment;
    }
    static updateFrom({ boardIdx, idx, description, }) {
        const comment = new BoardComment_1();
        comment.boardIdx = boardIdx;
        comment.description = description;
        comment.idx = idx;
        return comment;
    }
    static myPage({ idx, category, board_idx, file_path, user_idx, description, created_at, updated_at, deleted_at, }) {
        const comment = new BoardComment_1();
        comment.idx = idx;
        comment.boardIdx = board_idx;
        comment.category = category;
        comment.filePath = file_path;
        comment.userIdx = user_idx;
        comment.description = description;
        comment.createdAt = created_at;
        comment.updatedAt = updated_at;
        comment.deletedAt = deleted_at;
        return comment;
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BoardComment.prototype, "userIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BoardComment.prototype, "boardIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BoardComment.prototype, "boardState", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BoardComment.prototype, "filePath", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BoardComment.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BoardComment.prototype, "replyCnt", void 0);
BoardComment = BoardComment_1 = __decorate([
    (0, typeorm_1.Entity)()
], BoardComment);
exports.default = BoardComment;
//# sourceMappingURL=board-comment.entity.js.map