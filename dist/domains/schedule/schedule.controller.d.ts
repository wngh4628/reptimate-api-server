/// <reference types="express" />
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dtos/create-schedule.dto';
import { UpdateScheduleDto } from './dtos/update-schedule.dto';
import { User } from '../user/entities/user.entity';
import { PageRequest } from 'src/core/page';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    create(res: any, dto: CreateScheduleDto, user: User): Promise<import("express").Response<unknown, Record<string, any>>>;
    findRepeatSchedules(res: any, user: User, pageRequest: PageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
    findCalendarSchedules(res: any, user: User, date: string): Promise<import("express").Response<unknown, Record<string, any>>>;
    update(res: any, scheduleIdx: number, dto: UpdateScheduleDto): Promise<import("express").Response<unknown, Record<string, any>>>;
    remove(res: any, scheduleIdx: number): Promise<import("express").Response<unknown, Record<string, any>>>;
}
