"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleRepository = void 0;
const typeorm_ex_decorator_1 = require("../../../core/decorators/typeorm-ex.decorator");
const typeorm_1 = require("typeorm");
const schedule_entity_1 = require("../entities/schedule.entity");
const constants_1 = require("../helper/constants");
let ScheduleRepository = class ScheduleRepository extends typeorm_1.Repository {
    async findAndCountByUserIdx(userIdx, pageRequest) {
        return await this.createQueryBuilder('schedule')
            .where('schedule.userIdx = :userIdx', { userIdx })
            .andWhere('schedule.type = :type', { type: constants_1.SchedulesType.REPETITION })
            .orderBy('schedule.alarmTime', 'ASC')
            .addOrderBy('schedule.idx', 'ASC')
            .take(pageRequest.limit)
            .skip(pageRequest.offset)
            .getManyAndCount();
    }
    async findSchedulesByDate(userIdx, yearAndMonth) {
        return await this.createQueryBuilder('schedule')
            .where('schedule.userIdx = :userIdx', { userIdx })
            .andWhere('schedule.date LIKE :date', { date: `${yearAndMonth}%` })
            .orderBy('schedule.idx', 'ASC')
            .getMany();
    }
    async findByScheduleIdx(scheduleIdx) {
        return await this.findOne({
            where: {
                idx: scheduleIdx,
            },
        });
    }
};
ScheduleRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(schedule_entity_1.Schedule)
], ScheduleRepository);
exports.ScheduleRepository = ScheduleRepository;
//# sourceMappingURL=schedule.repository.js.map