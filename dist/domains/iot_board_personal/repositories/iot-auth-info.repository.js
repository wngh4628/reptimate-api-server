"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IotAuthInfoRepository = void 0;
const typeorm_ex_decorator_1 = require("../../../core/decorators/typeorm-ex.decorator");
const typeorm_1 = require("typeorm");
const iot_auth_info_entity_1 = require("../entities/iot-auth-info.entity");
let IotAuthInfoRepository = class IotAuthInfoRepository extends typeorm_1.Repository {
    findCurrentOneData() {
        return this.createQueryBuilder('iotauth').orderBy('idx', 'DESC').getOne();
    }
    chkAuthInfoDuplicate(boardSerial) {
        return this.createQueryBuilder('iotauth')
            .where({ boardSerial: boardSerial })
            .orderBy('idx', 'DESC')
            .getOne();
    }
};
IotAuthInfoRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(iot_auth_info_entity_1.IotAuthInfo)
], IotAuthInfoRepository);
exports.IotAuthInfoRepository = IotAuthInfoRepository;
//# sourceMappingURL=iot-auth-info.repository.js.map