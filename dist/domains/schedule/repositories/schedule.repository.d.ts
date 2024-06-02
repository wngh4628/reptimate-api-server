import { PageRequest } from 'src/core/page';
import { Repository } from 'typeorm';
import { Schedule } from '../entities/schedule.entity';
export declare class ScheduleRepository extends Repository<Schedule> {
    findAndCountByUserIdx(userIdx: number, pageRequest: PageRequest): Promise<[Schedule[], number]>;
    findSchedulesByDate(userIdx: number, yearAndMonth: string): Promise<Schedule[]>;
    findByScheduleIdx(scheduleIdx: number): Promise<Schedule>;
}
