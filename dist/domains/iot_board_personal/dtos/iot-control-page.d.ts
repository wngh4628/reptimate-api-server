import { PageRequest } from 'src/core/page';
export declare class IotControlPageRequest extends PageRequest {
    boardIdx: number;
    sensor: 'default' | 'uvblight' | 'heatinglight' | 'waterpump' | 'coolingfan';
    date: Date;
}
