"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IotPersonalModule = void 0;
const common_1 = require("@nestjs/common");
const iot_board_personal_controller_1 = require("./iot_board_personal.controller");
const iot_board_personal_service_1 = require("./iot_board_personal.service");
const iot_board_personal_repository_1 = require("./repositories/iot-board-personal.repository");
const iot_nature_record_repository_1 = require("./repositories/iot-nature-record.repository");
const iot_control_record_repository_1 = require("./repositories/iot-control-record.repository");
const iot_auth_info_repository_1 = require("./repositories/iot-auth-info.repository");
const typeorm_ex_module_1 = require("../../core/typeorm-ex.module");
let IotPersonalModule = class IotPersonalModule {
};
IotPersonalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([
                iot_board_personal_repository_1.IotBoardPersonalRepository,
                iot_nature_record_repository_1.IotNaturerecordRepository,
                iot_control_record_repository_1.IotControlrecordRepository,
                iot_auth_info_repository_1.IotAuthInfoRepository,
            ]),
        ],
        controllers: [iot_board_personal_controller_1.IotBoardPersonalController],
        providers: [iot_board_personal_service_1.IotBoardPersonalService],
    })
], IotPersonalModule);
exports.IotPersonalModule = IotPersonalModule;
//# sourceMappingURL=iot_board_personal.module.js.map