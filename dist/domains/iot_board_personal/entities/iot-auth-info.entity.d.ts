import BaseEntity from 'src/core/entity/base.entity';
import { CreateIotAuthDto } from '../dtos/create-iot-auth.dto';
export declare class IotAuthInfo extends BaseEntity {
    userIdx: number;
    boardTempName: string;
    boardSerial: string;
    static fromDto(dto: CreateIotAuthDto): IotAuthInfo;
}
