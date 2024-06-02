import { Schedule } from './entities/schedule.entity';
import { ScheduleRepository } from './repositories/schedule.repository';
import { CreateScheduleDto } from './dtos/create-schedule.dto';
import { UpdateScheduleDto } from './dtos/update-schedule.dto';
import { Page, PageRequest } from 'src/core/page';
import { UserRepository } from '../user/repositories/user.repository';
import { ScheduleListDto } from './dtos/schedule-list.dto';
import { DataSource } from 'typeorm';
export declare class ScheduleService {
    private scheduleRepository;
    private userRepository;
    private dataSource;
    private fcm;
    constructor(scheduleRepository: ScheduleRepository, userRepository: UserRepository, dataSource: DataSource);
    create(dto: CreateScheduleDto, userIdx: number): Promise<Schedule>;
    findRepeatSchedules(userIdx: number, pageRequest: PageRequest): Promise<Page<ScheduleListDto>>;
    findScheduleByDate(userIdx: number, date: string): Promise<Schedule[]>;
    update(scheduleIdx: number, dto: UpdateScheduleDto): Promise<Schedule>;
    remove(scheduleIdx: number): Promise<void>;
    sendNotifications(notifications: any, tokens: any): Promise<void>;
}
