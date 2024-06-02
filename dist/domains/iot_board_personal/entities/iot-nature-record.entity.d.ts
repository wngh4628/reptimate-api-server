import BaseEntity from 'src/core/entity/base.entity';
export declare class IotNatureRecord extends BaseEntity {
    boardIdx: number;
    currentTemp: string;
    currentHumid: string;
    currentTemp2: string;
    currentHumid2: string;
    type: number;
}
