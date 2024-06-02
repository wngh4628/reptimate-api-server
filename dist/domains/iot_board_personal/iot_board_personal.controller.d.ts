/// <reference types="express" />
import { IotBoardPersonalService } from './iot_board_personal.service';
import { PageRequest } from 'src/core/page';
import { User } from 'src/domains/user/entities/user.entity';
import { IotNaturePageRequest } from './dtos/iot-nature-page';
import { IotControlPageRequest } from './dtos/iot-control-page';
export declare class IotBoardPersonalController {
    private readonly iotPersonalService;
    constructor(iotPersonalService: IotBoardPersonalService);
    getMyBoardList(res: any, user: User, pageRequest: PageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
    getBoardList(res: any, user: User, pageRequest: PageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
    getNatureList(res: any, user: User, pageRequest: IotNaturePageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
    getControlList(res: any, user: User, pageRequest: IotControlPageRequest): Promise<import("express").Response<unknown, Record<string, any>>>;
    createSerialBoard(res: any, user: User): Promise<import("express").Response<unknown, Record<string, any>>>;
}
