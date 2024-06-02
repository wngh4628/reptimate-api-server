import { IotControlRecord } from '../entities/iot-control-record.entity';
import { RecordListDto } from './record-list.dto';
declare const RecordControlListDto_base: import("@nestjs/common").Type<Partial<RecordListDto>>;
export declare class RecordControlListDto extends RecordControlListDto_base {
    uvbLight: number;
    heatingLight: number;
    waterpump: number;
    coolingfan: number;
    constructor(iotControlRecord: IotControlRecord);
}
export {};
