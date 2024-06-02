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
exports.ScheduleService = void 0;
const schedule_entity_1 = require("./entities/schedule.entity");
const schedule_repository_1 = require("./repositories/schedule.repository");
const common_1 = require("@nestjs/common");
const page_1 = require("../../core/page");
const user_repository_1 = require("../user/repositories/user.repository");
const http_error_objects_1 = require("../../core/http/http-error-objects");
const schedule_list_dto_1 = require("./dtos/schedule-list.dto");
const admin = require("firebase-admin");
const typeorm_1 = require("typeorm");
const serviceAccount = require('../../../firebase-adminsdk.json');
let ScheduleService = class ScheduleService {
    constructor(scheduleRepository, userRepository, dataSource) {
        this.scheduleRepository = scheduleRepository;
        this.userRepository = userRepository;
        this.dataSource = dataSource;
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        this.fcm = admin.messaging();
    }
    async create(dto, userIdx) {
        const user = await this.userRepository.findByUserIdx(userIdx);
        if (!user) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_USER);
        }
        const schedule = schedule_entity_1.Schedule.from(dto);
        schedule.userIdx = userIdx;
        const result = await this.scheduleRepository.save(schedule);
        return result;
    }
    async findRepeatSchedules(userIdx, pageRequest) {
        const user = await this.userRepository.findByUserIdx(userIdx);
        if (!user) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_USER);
        }
        const [schedules, totalCount] = await this.scheduleRepository.findAndCountByUserIdx(userIdx, pageRequest);
        const items = schedules.map((schedule) => new schedule_list_dto_1.ScheduleListDto(schedule));
        return new page_1.Page(totalCount, items, pageRequest);
    }
    async findScheduleByDate(userIdx, date) {
        const user = await this.userRepository.findByUserIdx(userIdx);
        if (!user) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_USER);
        }
        const yearAndMonth = date.substring(0, 7);
        const schedules = await this.scheduleRepository.findSchedulesByDate(userIdx, yearAndMonth);
        return schedules;
    }
    async update(scheduleIdx, dto) {
        const schedule = await this.scheduleRepository.findByScheduleIdx(scheduleIdx);
        if (!schedule) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_SCHEDULE);
        }
        schedule.updateFromDto(dto);
        const result = await this.scheduleRepository.save(schedule);
        return result;
    }
    async remove(scheduleIdx) {
        const schedule = await this.scheduleRepository.findByScheduleIdx(scheduleIdx);
        if (!schedule) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_SCHEDULE);
        }
        await this.scheduleRepository.softDelete(scheduleIdx);
    }
    async sendNotifications(notifications, tokens) {
        try {
            const responses = await Promise.all(notifications.map(async (notification) => {
                const message = {
                    notification: {
                        title: notification.title,
                        body: notification.body,
                    },
                    tokens: [tokens],
                    android: {
                        data: {},
                    },
                    apns: {
                        payload: {
                            aps: {},
                        },
                    },
                };
                return this.fcm.sendEachForMulticast(message);
            }));
            console.log('Successfully sent messages:', responses);
        }
        catch (error) {
            console.log('Error sending messages:', error);
        }
    }
};
ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [schedule_repository_1.ScheduleRepository,
        user_repository_1.UserRepository,
        typeorm_1.DataSource])
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map