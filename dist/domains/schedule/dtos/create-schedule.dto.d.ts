import { SchedulesType } from '../helper/constants';
export declare class CreateScheduleDto {
    title: string;
    alarmTime: string;
    repeatDay: string;
    memo: string;
    type: SchedulesType;
    date: string;
}
