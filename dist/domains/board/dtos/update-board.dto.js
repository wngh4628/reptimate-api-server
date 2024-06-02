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
exports.UpdateBoardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_board_dto_1 = require("./create-board.dto");
const class_validator_1 = require("class-validator");
class UpdateBoardDto extends (0, swagger_1.PartialType)(create_board_dto_1.createBoardDto) {
}
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'adoption' || object.category === 'market'),
    (0, swagger_1.ApiProperty)({
        description: '상품 관련 테이블 인덱스 *분양글 or 중고 마켓만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '12',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateBoardDto.prototype, "boardCommercialIdx", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'adoption' || object.category === 'market'),
    (0, swagger_1.ApiProperty)({
        description: '가격 내용 *분양글 or 중고 마켓만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '90000',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateBoardDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'adoption'),
    (0, swagger_1.ApiProperty)({
        description: '성별 내용 *분양글만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '암컷',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateBoardDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'adoption'),
    (0, swagger_1.ApiProperty)({
        description: '크기 내용 *분양글에만 필요 나머지 게시판은 빈값으로 보내주세요.',
        default: '아성체',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateBoardDto.prototype, "size", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'adoption'),
    (0, swagger_1.ApiProperty)({
        description: '*분양글만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '크레스티드 게코',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateBoardDto.prototype, "variety", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'adoption'),
    (0, swagger_1.ApiProperty)({
        description: '*분양글만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '릴리 화이트',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateBoardDto.prototype, "pattern", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'adoption'),
    (0, swagger_1.ApiProperty)({
        description: '*분양글만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '2023-06',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateBoardDto.prototype, "birthDate", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'auction'),
    (0, swagger_1.ApiProperty)({
        description: '내용 *경매글만 필요, 경매 번호.',
        default: '65',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateBoardDto.prototype, "auctionIdx", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'auction'),
    (0, swagger_1.ApiProperty)({
        description: '품종 내용 *경매글만 필요, 상태',
        default: 'selling',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateBoardDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'auction'),
    (0, swagger_1.ApiProperty)({
        description: '스트림키 *경매글만 필요, 스트림키.',
        default: '21Bu-CQfU-im7s-W7NJ-ArLV',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateBoardDto.prototype, "streamKey", void 0);
exports.UpdateBoardDto = UpdateBoardDto;
//# sourceMappingURL=update-board.dto.js.map