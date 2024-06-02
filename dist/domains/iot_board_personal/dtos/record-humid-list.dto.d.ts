import { IotNatureRecord } from '../entities/iot-nature-record.entity';
import { RecordListDto } from './record-list.dto';
declare const RecordHumidListDto_base: import("@nestjs/common").Type<Partial<RecordListDto>>;
export declare class RecordHumidListDto extends RecordHumidListDto_base {
    currentHumid: string;
    currentHumid2: string;
    constructor(iotNatureRecord: IotNatureRecord);
}
export {};
