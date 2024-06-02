import { IotBoardPersonalRepository } from './repositories/iot-board-personal.repository';
import { IotNaturerecordRepository } from './repositories/iot-nature-record.repository';
import { IotControlrecordRepository } from './repositories/iot-control-record.repository';
import { IotAuthInfoRepository } from './repositories/iot-auth-info.repository';
import { Page, PageRequest } from 'src/core/page';
import { IotNaturePageRequest } from './dtos/iot-nature-page';
import { RecordTempListDto } from './dtos/record-temp-list.dto';
import { RecordHumidListDto } from './dtos/record-humid-list.dto';
import { IotControlPageRequest } from './dtos/iot-control-page';
import { RecordUvblightListDto } from './dtos/record-uvblight-list.dto';
import { RecordHeatinglightListDto } from './dtos/record-heatinglight-list.dto';
import { RecordWaterpumpListDto } from './dtos/record-waterpump-list.dto';
import { RecordcoolingfanListDto } from './dtos/record-coolingfan-list.dto';
import { CreateIotAuthDto } from './dtos/create-iot-auth.dto';
import { IotAuthInfo } from './entities/iot-auth-info.entity';
export declare class IotBoardPersonalService {
    private iotBoardPersonalRepository;
    private iotNaturerecordRepository;
    private iotControlrecordRepository;
    private iotAuthInfoRepository;
    constructor(iotBoardPersonalRepository: IotBoardPersonalRepository, iotNaturerecordRepository: IotNaturerecordRepository, iotControlrecordRepository: IotControlrecordRepository, iotAuthInfoRepository: IotAuthInfoRepository);
    getMyBoardList(userIdx: number, pageRequest: PageRequest): Promise<void>;
    getBoardList(userIdx: number, pageRequest: PageRequest): Promise<void>;
    getNatureList(pageRequest: IotNaturePageRequest): Promise<Page<RecordTempListDto> | Page<RecordHumidListDto>>;
    getControlList(pageRequest: IotControlPageRequest): Promise<Page<RecordUvblightListDto> | Page<RecordHeatinglightListDto> | Page<RecordWaterpumpListDto> | Page<RecordcoolingfanListDto>>;
    createAuthInfo(dto: CreateIotAuthDto): Promise<IotAuthInfo>;
    getAuthInfo_current(): Promise<IotAuthInfo>;
    chkAuthInfoDuplicate(boardSerial: string): Promise<IotAuthInfo>;
    setTime(todaydate: Date): Promise<{
        firstData: Date;
        secondData: Date;
    }>;
}
