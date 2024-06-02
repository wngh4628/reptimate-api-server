import { PageRequest } from 'src/core/page';
import { Repository } from 'typeorm';
import { IotBoardPersonal } from '../entities/iot-board-personal.entity';
export declare class IotBoardPersonalRepository extends Repository<IotBoardPersonal> {
    findAndCountByUserIdx(userIdx: number, pageRequest: PageRequest): Promise<[IotBoardPersonal[], number]>;
}
