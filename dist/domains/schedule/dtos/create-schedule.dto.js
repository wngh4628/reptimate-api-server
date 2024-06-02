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
exports.CreateScheduleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const constants_1 = require("../helper/constants");
class CreateScheduleDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '스케줄링 제목',
        default: '무근이 밥주기',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateScheduleDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '푸시 알림 받을 시간',
        default: '18:00',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateScheduleDto.prototype, "alarmTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `푸시 알림 반복할 요일
    일~월요일에서 알림을 설정한 날을 1과 0으로 표현한다.
    ex) 월,수,금 반복인경우 0,1,0,1,0,1,0`,
        default: '0,0,0,0,0,0,0',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateScheduleDto.prototype, "repeatDay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '스케줄링 내용',
        default: '밥 끝까지 먹는지 확인하기',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateScheduleDto.prototype, "memo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `스케줄링 종류
    - 달력: CALENDAR
    - 알람: REPETITION
    `,
        enum: constants_1.SchedulesType,
        default: constants_1.SchedulesType.CALENDAR,
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateScheduleDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '달력 날짜',
        type: 'string',
        default: '2023-06-02',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateScheduleDto.prototype, "date", void 0);
exports.CreateScheduleDto = CreateScheduleDto;
//# sourceMappingURL=create-schedule.dto.js.map