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
exports.ScheduleListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../helper/constants");
class ScheduleListDto {
    constructor(schedule) {
        this.idx = schedule.idx;
        this.title = schedule.title;
        this.memo = schedule.memo;
        this.alarmTime = schedule.alarmTime;
        this.repeatDay = schedule.repeatDay;
        this.type = schedule.type;
        this.date = schedule.date;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '스케줄 인덱스',
        default: 1,
    }),
    __metadata("design:type", Number)
], ScheduleListDto.prototype, "idx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '스케줄 제목',
        default: '스케줄 제목',
    }),
    __metadata("design:type", String)
], ScheduleListDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '스케줄 내용',
        default: '스케줄 내용',
    }),
    __metadata("design:type", String)
], ScheduleListDto.prototype, "memo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '알림 시간',
        default: '18:00',
    }),
    __metadata("design:type", String)
], ScheduleListDto.prototype, "alarmTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '알림 반복 요일',
        default: '0, 0, 0, 0, 0, 0, 0',
    }),
    __metadata("design:type", String)
], ScheduleListDto.prototype, "repeatDay", void 0);
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
    __metadata("design:type", String)
], ScheduleListDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '스케줄 날짜',
        type: 'string',
        default: '2023-06-02',
        required: false,
    }),
    __metadata("design:type", String)
], ScheduleListDto.prototype, "date", void 0);
exports.ScheduleListDto = ScheduleListDto;
//# sourceMappingURL=schedule-list.dto.js.map