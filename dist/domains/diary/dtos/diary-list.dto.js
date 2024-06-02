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
exports.DiaryListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const date_utils_1 = require("../../../utils/date-utils");
class DiaryListDto {
    constructor(diary) {
        let imagePath = '';
        if (diary.images[0]) {
            imagePath = diary.images[0].imagePath;
        }
        this.idx = diary.idx;
        this.title = diary.title;
        this.content = diary.content;
        this.imagePath = imagePath;
        this.createdAt = diary.createdAt;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '다이어리 인덱스',
        default: 1,
    }),
    __metadata("design:type", Number)
], DiaryListDto.prototype, "idx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '다이어리 제목',
        default: '제목',
    }),
    __metadata("design:type", String)
], DiaryListDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '다이어리 내용',
        default: '다이어리 내용입니다.',
    }),
    __metadata("design:type", String)
], DiaryListDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '다이어리 대표(첫번째) 이미지 url',
        default: 'https://image1',
    }),
    __metadata("design:type", String)
], DiaryListDto.prototype, "imagePath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '생성일',
        default: date_utils_1.default.momentNow(),
    }),
    __metadata("design:type", Date)
], DiaryListDto.prototype, "createdAt", void 0);
exports.DiaryListDto = DiaryListDto;
//# sourceMappingURL=diary-list.dto.js.map