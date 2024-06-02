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
exports.ReplyDto = exports.CommentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CommentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '게시글 인덱스 번호',
        default: 1,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CommentDto.prototype, "boardIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '댓글인가? 답글인가?',
        default: 'comment',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CommentDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'reply'),
    (0, swagger_1.ApiProperty)({
        description: '댓글 idx',
        default: '1',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CommentDto.prototype, "commentIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '댓글 내용',
        default: '댓글에 대한 내용입니다.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CommentDto.prototype, "description", void 0);
exports.CommentDto = CommentDto;
class ReplyDto extends CommentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '댓글 인덱스 번호',
        default: 1,
    }),
    __metadata("design:type", Number)
], ReplyDto.prototype, "commentIdx", void 0);
exports.ReplyDto = ReplyDto;
//# sourceMappingURL=board-comment.dto.js.map