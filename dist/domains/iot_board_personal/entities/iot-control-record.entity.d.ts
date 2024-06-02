import BaseEntity from 'src/core/entity/base.entity';
export declare class IotControlRecord extends BaseEntity {
    boardIdx: number;
    uvbLight: number;
    heatingLight: number;
    waterPump: number;
    coolingFan: number;
    type: number;
}
