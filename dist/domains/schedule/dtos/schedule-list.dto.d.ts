import { Schedule } from '../entities/schedule.entity';
export declare class ScheduleListDto {
    idx: number;
    title: string;
    memo: string;
    alarmTime: string;
    repeatDay: string;
    type: string;
    date: string;
    constructor(schedule: Schedule);
}
