import { IotControlRecord } from '../entities/iot-control-record.entity';
import { RecordListDto } from './record-list.dto';
declare const RecordHeatinglightListDto_base: import("@nestjs/common").Type<Partial<RecordListDto>>;
export declare class RecordHeatinglightListDto extends RecordHeatinglightListDto_base {
    heatingLight: number;
    constructor(iotControlRecord: IotControlRecord);
}
export {};
