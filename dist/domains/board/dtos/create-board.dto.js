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
exports.createBoardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class createBoardDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '유저 번호',
        default: 1,
    }),
    __metadata("design:type", Number)
], createBoardDto.prototype, "userIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '제목?',
        default: '안녕하세요.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(10000),
    __metadata("design:type", String)
], createBoardDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `어떤 게시판인가?\n
    - free(자유게시판)
    - adoption(분양게시판)\n
    - auction(경매게시판)`,
        default: 'free',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createBoardDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '게시글 내용',
        default: '게시글에 대한 내용입니다.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createBoardDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'adoption' ||
        object.category === 'market' ||
        object.category === 'auction'),
    (0, swagger_1.ApiProperty)({
        description: '가격 내용 *분양글 or 중고 마켓만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '*분양글 or 중고 or 경매 게시글만* 90000',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], createBoardDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '썸네일',
        default: '썸네일은 fileUrl의 0번째 사진이 들어갑니다.',
    }),
    __metadata("design:type", String)
], createBoardDto.prototype, "thumbnail", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'adoption' || object.category === 'auction'),
    (0, swagger_1.ApiProperty)({
        description: '성별 내용 *분양 or 경매* 글만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '*분양 or 경매* 암컷',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createBoardDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'adoption' || object.category === 'auction'),
    (0, swagger_1.ApiProperty)({
        description: '크기 내용 *분양글에만 필요 나머지 게시판은 빈값으로 보내주세요.',
        default: '*분양 or 경매* 아성체',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createBoardDto.prototype, "size", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'adoption' || object.category === 'auction'),
    (0, swagger_1.ApiProperty)({
        description: '품종 내용 *분양글만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '*분양 or 경매* 크레스티드 게코',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createBoardDto.prototype, "variety", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'auction' || object.category === 'adoption'),
    (0, swagger_1.ApiProperty)({
        description: '해당 종의 패턴 or 모프 *경매만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '*분양 or 경매* 릴리 화이트',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createBoardDto.prototype, "pattern", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'auction'),
    (0, swagger_1.ApiProperty)({
        description: '경매 시작가: 가격 내용 *경매만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '*경매* 50000',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], createBoardDto.prototype, "startPrice", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'auction'),
    (0, swagger_1.ApiProperty)({
        description: '경매 입찰 단위 *경매만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '*경매* 10000',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], createBoardDto.prototype, "unit", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'auction'),
    (0, swagger_1.ApiProperty)({
        description: '경매 마감 시간 *경매만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '*경매* 2023-08-17 22:00',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createBoardDto.prototype, "endTime", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'auction'),
    (0, swagger_1.ApiProperty)({
        description: '경매 마감 알림 시간 *경매만 필요 & 알람 시간 설정 시만 필요 나머지 게시판은 빈값으로 보내주세요.',
        default: '*경매* 설정 시 ->30 설정 안하면 ->noAlert',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createBoardDto.prototype, "alertTime", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'auction'),
    (0, swagger_1.ApiProperty)({
        description: '경매 연장 룰 *경매만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '*경매* 1',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], createBoardDto.prototype, "extensionRule", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.category === 'auction' || object.category === 'adoption'),
    (0, swagger_1.ApiProperty)({
        description: '해칭일 or 출생일 *경매만 필요, 나머지 게시판은 빈값으로 보내주세요.',
        default: '*분양 or 경매* 2023-03-12',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createBoardDto.prototype, "birthDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '미디어(사진, 영상)가 있으면 미디어 처리 서버에 먼저 보내고, DB에 저장될 데이터 리턴 받아 넣어줘야 합니다.',
        default: [
            {
                category: 'video',
                path: 'https://reptimate.s3.ap-northeast-2.amazonaws.com/test/20230629233509-e04030ed-107c-4fc7-93b9-d44fad9469d7-video.m3u8',
                coverImgPath: 'https://reptimate.s3.ap-northeast-2.amazonaws.com/test/20230629233509-e04030ed-107c-4fc7-93b9-d44fad9469d7-video.jpg',
            },
            {
                category: 'img',
                path: 'https://reptimate.s3.ap-northeast-2.amazonaws.com/board/20230629233511-42b37a7f-20d1-43f3-8615-9cb01e8ac99d-N1.jpeg',
            },
        ],
    }),
    __metadata("design:type", Array)
], createBoardDto.prototype, "fileUrl", void 0);
exports.createBoardDto = createBoardDto;
//# sourceMappingURL=create-board.dto.js.map