"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IotBoardPersonalRepository = void 0;
const typeorm_ex_decorator_1 = require("../../../core/decorators/typeorm-ex.decorator");
const typeorm_1 = require("typeorm");
const iot_board_personal_entity_1 = require("../entities/iot-board-personal.entity");
let IotBoardPersonalRepository = class IotBoardPersonalRepository extends typeorm_1.Repository {
    findAndCountByUserIdx(userIdx, pageRequest) {
        return this.createQueryBuilder('iot_board_personal')
            .leftJoinAndSelect('iot_board_personal.iotAuthInfo', 'iot-auth-info')
            .where({ userIdx: userIdx })
            .orderBy('iot_board_personal.idx', pageRequest.order)
            .take(pageRequest.limit)
            .skip(pageRequest.offset)
            .getManyAndCount();
    }
};
IotBoardPersonalRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(iot_board_personal_entity_1.IotBoardPersonal)
], IotBoardPersonalRepository);
exports.IotBoardPersonalRepository = IotBoardPersonalRepository;
//# sourceMappingURL=iot-board-personal.repository.js.map