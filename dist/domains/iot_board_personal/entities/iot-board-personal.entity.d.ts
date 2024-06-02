import BaseEntity from 'src/core/entity/base.entity';
import { IotAuthInfo } from './iot-auth-info.entity';
export declare class IotBoardPersonal extends BaseEntity {
    userIdx: number;
    authIdx: number;
    cageName: string;
    currentUvbLight: number;
    currentHeatingLight: number;
    autoChkLight: number;
    autoChkTemp: number;
    autoChkHumid: number;
    currentTemp: string;
    currentTemp2: string;
    maxTemp: string;
    minTemp: string;
    currentHumid: string;
    currentHumid2: string;
    maxHumid: string;
    minHumid: string;
    usage: string;
    autoLightUtctimeOn: string;
    autoLightUtctimeOff: string;
    iotAuthInfo: IotAuthInfo;
}
