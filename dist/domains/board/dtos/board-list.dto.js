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
exports.BoardListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class BoardListDto {
    static from({ idx, userIdx, title, category, description, createdAt, images, view, commentCnt, thumbnail, }) {
        const board = new BoardListDto();
        board.idx = idx;
        board.view = view;
        board.userIdx = userIdx;
        board.title = title;
        board.category = category;
        board.description = description;
        board.writeDate = createdAt;
        board.images = images;
        board.commentCnt = commentCnt;
        board.thumbnail = thumbnail;
        return board;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '보드 넘버',
        default: '31',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(32),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], BoardListDto.prototype, "idx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '유저 인덱스',
        default: '1',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], BoardListDto.prototype, "userIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '어떤 게시판인가?',
        default: 'free',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BoardListDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '제목',
        default: '안녕하세요.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(10000),
    __metadata("design:type", String)
], BoardListDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '썸네일 사진 주소',
        default: 'https://reptimate.com/fdasfewgfadsharredhasdf.jpg',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BoardListDto.prototype, "thumbnail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '게시글 내용',
        default: '게시글에 대한 내용입니다.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BoardListDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '조회수 입니다',
        default: '187',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], BoardListDto.prototype, "replyCnt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '댓글+답글 수',
        type: 'number',
        default: '202',
        required: false,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], BoardListDto.prototype, "commentCnt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '작성일',
        type: 'date',
        default: '2023-04-17',
        required: false,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], BoardListDto.prototype, "writeDate", void 0);
exports.BoardListDto = BoardListDto;
//# sourceMappingURL=board-list.dto.js.map