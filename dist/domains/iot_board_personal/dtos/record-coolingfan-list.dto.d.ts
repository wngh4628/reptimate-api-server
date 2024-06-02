import { IotControlRecord } from '../entities/iot-control-record.entity';
import { RecordListDto } from './record-list.dto';
declare const RecordcoolingfanListDto_base: import("@nestjs/common").Type<Partial<RecordListDto>>;
export declare class RecordcoolingfanListDto extends RecordcoolingfanListDto_base {
    coolingFan: number;
    constructor(iotControlRecord: IotControlRecord);
}
export {};
