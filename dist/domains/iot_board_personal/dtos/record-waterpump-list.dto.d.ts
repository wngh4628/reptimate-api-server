import { IotControlRecord } from '../entities/iot-control-record.entity';
import { RecordListDto } from './record-list.dto';
declare const RecordWaterpumpListDto_base: import("@nestjs/common").Type<Partial<RecordListDto>>;
export declare class RecordWaterpumpListDto extends RecordWaterpumpListDto_base {
    waterPump: number;
    constructor(iotControlRecord: IotControlRecord);
}
export {};
