import { IotNatureRecord } from '../entities/iot-nature-record.entity';
import { RecordListDto } from './record-list.dto';
declare const RecordTempListDto_base: import("@nestjs/common").Type<Partial<RecordListDto>>;
export declare class RecordTempListDto extends RecordTempListDto_base {
    currentTemp: string;
    currentTemp2: string;
    constructor(iotNatureRecord: IotNatureRecord);
}
export {};
