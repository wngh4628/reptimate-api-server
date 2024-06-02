import { Repository } from 'typeorm';
import { IotAuthInfo } from '../entities/iot-auth-info.entity';
export declare class IotAuthInfoRepository extends Repository<IotAuthInfo> {
    findCurrentOneData(): Promise<IotAuthInfo>;
    chkAuthInfoDuplicate(boardSerial: string): Promise<IotAuthInfo>;
}
