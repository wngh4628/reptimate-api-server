import BaseEntity from 'src/core/entity/base.entity';
import { UpdateScheduleDto } from '../dtos/update-schedule.dto';
import { SchedulesType } from '../helper/constants';
export declare class Schedule extends BaseEntity {
    title: string;
    memo: string;
    userIdx: number;
    alarmTime: string;
    repeatDay: string;
    type: SchedulesType;
    date: string;
    static from({ title, memo, alarmTime, repeatDay, type, date, }: {
        title: string;
        memo: string;
        alarmTime: string;
        repeatDay: string;
        type: SchedulesType;
        date: string;
    }): Schedule;
    updateFromDto(dto: UpdateScheduleDto): void;
}
