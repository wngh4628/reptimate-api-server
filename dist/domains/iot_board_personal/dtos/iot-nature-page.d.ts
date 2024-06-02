import { PageRequest } from 'src/core/page';
export declare class IotNaturePageRequest extends PageRequest {
    boardIdx: number;
    sensor: 'default' | 'temp' | 'humid';
    date: Date;
}
