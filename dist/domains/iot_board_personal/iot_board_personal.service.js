"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IotBoardPersonalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const iot_board_personal_repository_1 = require("./repositories/iot-board-personal.repository");
const iot_nature_record_repository_1 = require("./repositories/iot-nature-record.repository");
const iot_control_record_repository_1 = require("./repositories/iot-control-record.repository");
const iot_auth_info_repository_1 = require("./repositories/iot-auth-info.repository");
const page_1 = require("../../core/page");
const iot_board_personal_list_dto_1 = require("./dtos/iot-board-personal-list.dto");
const record_temp_list_dto_1 = require("./dtos/record-temp-list.dto");
const record_humid_list_dto_1 = require("./dtos/record-humid-list.dto");
const record_nature_list_dto_1 = require("./dtos/record-nature-list.dto");
const record_control_list_dto_1 = require("./dtos/record-control-list.dto");
const record_uvblight_list_dto_1 = require("./dtos/record-uvblight-list.dto");
const record_heatinglight_list_dto_1 = require("./dtos/record-heatinglight-list.dto");
const record_waterpump_list_dto_1 = require("./dtos/record-waterpump-list.dto");
const record_coolingfan_list_dto_1 = require("./dtos/record-coolingfan-list.dto");
const iot_auth_info_entity_1 = require("./entities/iot-auth-info.entity");
let IotBoardPersonalService = class IotBoardPersonalService {
    constructor(iotBoardPersonalRepository, iotNaturerecordRepository, iotControlrecordRepository, iotAuthInfoRepository) {
        this.iotBoardPersonalRepository = iotBoardPersonalRepository;
        this.iotNaturerecordRepository = iotNaturerecordRepository;
        this.iotControlrecordRepository = iotControlrecordRepository;
        this.iotAuthInfoRepository = iotAuthInfoRepository;
    }
    async getMyBoardList(userIdx, pageRequest) {
        const [iotBoards, totalCount] = await this.iotBoardPersonalRepository.findAndCountByUserIdx(userIdx, pageRequest);
    }
    async getBoardList(userIdx, pageRequest) {
        const iotBoards = await this.iotBoardPersonalRepository.find({});
        const items = iotBoards.map((board) => new iot_board_personal_list_dto_1.IotBoardPersonalListDto().totalBoardList(board));
    }
    async getNatureList(pageRequest) {
        const timelist = await this.setTime(pageRequest.date);
        const iotnaturel = await this.iotNaturerecordRepository.find({
            where: {
                boardIdx: pageRequest.boardIdx,
                createdAt: (0, typeorm_1.Between)(new Date(timelist.firstData), new Date(timelist.secondData)),
            },
        });
        let items;
        switch (pageRequest.sensor) {
            case 'temp':
                items = iotnaturel.map((nature) => new record_temp_list_dto_1.RecordTempListDto(nature));
                return new page_1.Page(iotnaturel.length, items, pageRequest);
                break;
            case 'humid':
                items = iotnaturel.map((nature) => new record_humid_list_dto_1.RecordHumidListDto(nature));
                return new page_1.Page(iotnaturel.length, items, pageRequest);
                break;
            default:
                items = iotnaturel.map((nature) => new record_nature_list_dto_1.RecordNatureListDto(nature));
                return new page_1.Page(iotnaturel.length, items, pageRequest);
        }
    }
    async getControlList(pageRequest) {
        const timelist = await this.setTime(pageRequest.date);
        const iotcontrol = await this.iotControlrecordRepository.find({
            where: {
                boardIdx: pageRequest.boardIdx,
                createdAt: (0, typeorm_1.Between)(new Date(timelist.firstData), new Date(timelist.secondData)),
            },
        });
        let items;
        switch (pageRequest.sensor) {
            case 'uvblight':
                items = iotcontrol.map((control) => new record_uvblight_list_dto_1.RecordUvblightListDto(control));
                return new page_1.Page(iotcontrol.length, items, pageRequest);
                break;
            case 'heatinglight':
                items = iotcontrol.map((control) => new record_heatinglight_list_dto_1.RecordHeatinglightListDto(control));
                return new page_1.Page(iotcontrol.length, items, pageRequest);
                break;
            case 'waterpump':
                items = iotcontrol.map((control) => new record_waterpump_list_dto_1.RecordWaterpumpListDto(control));
                return new page_1.Page(iotcontrol.length, items, pageRequest);
                break;
            case 'coolingfan':
                items = iotcontrol.map((control) => new record_coolingfan_list_dto_1.RecordcoolingfanListDto(control));
                return new page_1.Page(iotcontrol.length, items, pageRequest);
                break;
            default:
                items = iotcontrol.map((control) => new record_control_list_dto_1.RecordControlListDto(control));
                return new page_1.Page(iotcontrol.length, items, pageRequest);
        }
    }
    async createAuthInfo(dto) {
        const Iotauthinfo = iot_auth_info_entity_1.IotAuthInfo.fromDto(dto);
        const result = await this.iotAuthInfoRepository.save(Iotauthinfo);
        return result;
    }
    async getAuthInfo_current() {
        const iotAuth = await this.iotAuthInfoRepository.findCurrentOneData();
        return iotAuth;
    }
    async chkAuthInfoDuplicate(boardSerial) {
        const chkDuplicate = await this.iotAuthInfoRepository.chkAuthInfoDuplicate(boardSerial);
        return chkDuplicate;
    }
    async setTime(todaydate) {
        const firstData = new Date(todaydate);
        const secondData = new Date(todaydate);
        secondData.setHours(secondData.getHours() + 24);
        secondData.setSeconds(secondData.getSeconds() - 1);
        const timelist = {
            firstData: firstData,
            secondData: secondData,
        };
        return timelist;
    }
};
IotBoardPersonalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [iot_board_personal_repository_1.IotBoardPersonalRepository,
        iot_nature_record_repository_1.IotNaturerecordRepository,
        iot_control_record_repository_1.IotControlrecordRepository,
        iot_auth_info_repository_1.IotAuthInfoRepository])
], IotBoardPersonalService);
exports.IotBoardPersonalService = IotBoardPersonalService;
//# sourceMappingURL=iot_board_personal.service.js.map