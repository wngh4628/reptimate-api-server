import { IotNatureRecord } from '../entities/iot-nature-record.entity';
import { RecordListDto } from './record-list.dto';
declare const RecordNatureListDto_base: import("@nestjs/common").Type<Partial<RecordListDto>>;
export declare class RecordNatureListDto extends RecordNatureListDto_base {
    currentTemp: string;
    currentHumid: string;
    currentTemp2: string;
    currentHumid2: string;
    constructor(iotNatureRecord: IotNatureRecord);
}
export {};
