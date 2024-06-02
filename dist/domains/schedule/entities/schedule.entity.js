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
var Schedule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const base_entity_1 = require("../../../core/entity/base.entity");
const typeorm_1 = require("typeorm");
const constants_1 = require("../helper/constants");
let Schedule = Schedule_1 = class Schedule extends base_entity_1.default {
    static from({ title, memo, alarmTime, repeatDay, type, date, }) {
        const schedule = new Schedule_1();
        schedule.title = title;
        schedule.memo = memo;
        schedule.alarmTime = alarmTime;
        schedule.repeatDay = repeatDay;
        schedule.type = type;
        schedule.date = date;
        return schedule;
    }
    updateFromDto(dto) {
        this.title = dto.title;
        this.memo = dto.memo;
        this.alarmTime = dto.alarmTime;
        this.repeatDay = dto.repeatDay;
        this.date = dto.date;
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Schedule.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Schedule.prototype, "memo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unsigned: true,
    }),
    __metadata("design:type", Number)
], Schedule.prototype, "userIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Schedule.prototype, "alarmTime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: `일~월요일에서 알림을 설정한 날을 1과 0으로 표현한다.
    ex) 월,수,금 반복인경우 0,1,0,1,0,1,0`,
    }),
    __metadata("design:type", String)
], Schedule.prototype, "repeatDay", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Schedule.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Schedule.prototype, "date", void 0);
Schedule = Schedule_1 = __decorate([
    (0, typeorm_1.Entity)()
], Schedule);
exports.Schedule = Schedule;
//# sourceMappingURL=schedule.entity.js.map