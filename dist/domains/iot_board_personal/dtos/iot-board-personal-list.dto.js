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
exports.IotBoardPersonalListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const date_utils_1 = require("../../../utils/date-utils");
class IotBoardPersonalListDto {
    constructor() {
    }
    totalBoardList(iotBoardPersonal) {
        this.idx = iotBoardPersonal.idx;
        this.cageName = iotBoardPersonal.cageName;
        this.currentUvbLight = iotBoardPersonal.currentUvbLight;
        this.currentHeatingLight = iotBoardPersonal.currentHeatingLight;
        this.autoChkLight = iotBoardPersonal.autoChkLight;
        this.autoChkTemp = iotBoardPersonal.autoChkTemp;
        this.autoChkHumid = iotBoardPersonal.autoChkHumid;
        this.currentTemp = iotBoardPersonal.currentTemp;
        this.currentTemp2 = iotBoardPersonal.currentTemp2;
        this.maxTemp = iotBoardPersonal.maxTemp;
        this.minTemp = iotBoardPersonal.minTemp;
        this.currentHumid = iotBoardPersonal.currentHumid;
        this.currentHumid2 = iotBoardPersonal.currentHumid2;
        this.maxHumid = iotBoardPersonal.maxHumid;
        this.minHumid = iotBoardPersonal.minHumid;
        this.usage = iotBoardPersonal.usage;
        this.autoLightUtctimeOn = iotBoardPersonal.autoLightUtctimeOn;
        this.autoLightUtctimeOff = iotBoardPersonal.autoLightUtctimeOff;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '개인 보드 인덱스',
        default: 1,
    }),
    __metadata("design:type", Number)
], IotBoardPersonalListDto.prototype, "idx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '케이지 이름',
        default: '크레크레',
    }),
    __metadata("design:type", String)
], IotBoardPersonalListDto.prototype, "cageName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '현재 uvb 램프 현황',
        default: 'true',
    }),
    __metadata("design:type", Number)
], IotBoardPersonalListDto.prototype, "currentUvbLight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '현재 heating 램프 현황',
        default: 'true',
    }),
    __metadata("design:type", Number)
], IotBoardPersonalListDto.prototype, "currentHeatingLight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '조명 자동화 체크',
        default: 'true',
    }),
    __metadata("design:type", Number)
], IotBoardPersonalListDto.prototype, "autoChkLight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '온도 자동화 체크',
        default: 'true',
    }),
    __metadata("design:type", Number)
], IotBoardPersonalListDto.prototype, "autoChkTemp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '습도 자동화 체크',
        default: 'true',
    }),
    __metadata("design:type", Number)
], IotBoardPersonalListDto.prototype, "autoChkHumid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '현재 온도 1',
        default: '0.0',
    }),
    __metadata("design:type", String)
], IotBoardPersonalListDto.prototype, "currentTemp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '현재 온도 2',
        default: '0.0',
    }),
    __metadata("design:type", String)
], IotBoardPersonalListDto.prototype, "currentTemp2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '최대 설정 온도',
        default: '0.0',
    }),
    __metadata("design:type", String)
], IotBoardPersonalListDto.prototype, "maxTemp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '최소 설정 온도',
        default: '0.0',
    }),
    __metadata("design:type", String)
], IotBoardPersonalListDto.prototype, "minTemp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '현재 습도 1',
        default: '0.0',
    }),
    __metadata("design:type", String)
], IotBoardPersonalListDto.prototype, "currentHumid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '현재 습도 2',
        default: '0.0',
    }),
    __metadata("design:type", String)
], IotBoardPersonalListDto.prototype, "currentHumid2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '최대 설정 습도',
        default: '0.0',
    }),
    __metadata("design:type", String)
], IotBoardPersonalListDto.prototype, "maxHumid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '최저 설정 습도',
        default: '0.0',
    }),
    __metadata("design:type", String)
], IotBoardPersonalListDto.prototype, "minHumid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '사용 용도',
        default: '0.0',
    }),
    __metadata("design:type", String)
], IotBoardPersonalListDto.prototype, "usage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '자동 조광기 켜지는 시간',
        default: '00:00',
    }),
    __metadata("design:type", String)
], IotBoardPersonalListDto.prototype, "autoLightUtctimeOn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '자동 조광기 꺼지는 시간',
        default: '00:00',
    }),
    __metadata("design:type", String)
], IotBoardPersonalListDto.prototype, "autoLightUtctimeOff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'boardTempName',
        default: 'KR_B1',
    }),
    __metadata("design:type", String)
], IotBoardPersonalListDto.prototype, "boardTempName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '생성일',
        default: date_utils_1.default.momentNow(),
    }),
    __metadata("design:type", Date)
], IotBoardPersonalListDto.prototype, "createdAt", void 0);
exports.IotBoardPersonalListDto = IotBoardPersonalListDto;
//# sourceMappingURL=iot-board-personal-list.dto.js.map