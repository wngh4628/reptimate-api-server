import { IotBoardPersonal } from '../entities/iot-board-personal.entity';
export declare class IotBoardPersonalListDto {
    idx: number;
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
    boardTempName: string;
    createdAt: Date;
    constructor();
    totalBoardList(iotBoardPersonal: IotBoardPersonal): void;
}
