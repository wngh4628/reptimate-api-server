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
var IotAuthInfo_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IotAuthInfo = void 0;
const base_entity_1 = require("../../../core/entity/base.entity");
const typeorm_1 = require("typeorm");
let IotAuthInfo = IotAuthInfo_1 = class IotAuthInfo extends base_entity_1.default {
    static fromDto(dto) {
        const iotAuthInfo = new IotAuthInfo_1();
        iotAuthInfo.userIdx = dto.userIdx;
        iotAuthInfo.boardTempName = dto.boardTempName;
        iotAuthInfo.boardSerial = dto.boardSerial;
        return iotAuthInfo;
    }
};
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], IotAuthInfo.prototype, "userIdx", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 255,
    }),
    __metadata("design:type", String)
], IotAuthInfo.prototype, "boardTempName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 255,
    }),
    __metadata("design:type", String)
], IotAuthInfo.prototype, "boardSerial", void 0);
IotAuthInfo = IotAuthInfo_1 = __decorate([
    (0, typeorm_1.Entity)()
], IotAuthInfo);
exports.IotAuthInfo = IotAuthInfo;
//# sourceMappingURL=iot-auth-info.entity.js.map