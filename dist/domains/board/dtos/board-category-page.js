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
exports.BoardCategoryPageRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const page_1 = require("../../../core/page");
class BoardCategoryPageRequest extends page_1.PageRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '정렬 기준',
        required: true,
        default: 'created',
        enum: ['created', 'view', 'price'],
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BoardCategoryPageRequest.prototype, "orderCriteria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `보드 카테고리\n
        - 기본(전체)
        - 중고거래\n
        - 분양\n
        - 경매`,
        enum: [
            'free',
            'ask',
            'market',
            'adoption',
            'auction',
            'auctionSelling',
            'auctionEnd',
        ],
        default: 'free',
    }),
    __metadata("design:type", String)
], BoardCategoryPageRequest.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로그인 되어 있으면, 로그인된 유저 idx 넣어주세요. 로그인 되어있지 않으면 안넣으시면 됩니다. *검색은 안넣으셔도 됩니다!!',
        required: true,
        default: 65,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BoardCategoryPageRequest.prototype, "userIdx", void 0);
exports.BoardCategoryPageRequest = BoardCategoryPageRequest;
//# sourceMappingURL=board-category-page.js.map