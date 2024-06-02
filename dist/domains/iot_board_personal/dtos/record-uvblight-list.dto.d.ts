import { IotControlRecord } from '../entities/iot-control-record.entity';
import { RecordListDto } from './record-list.dto';
declare const RecordUvblightListDto_base: import("@nestjs/common").Type<Partial<RecordListDto>>;
export declare class RecordUvblightListDto extends RecordUvblightListDto_base {
    uvbLight: number;
    constructor(iotControlRecord: IotControlRecord);
}
export {};
