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
exports.IotBoardPersonal = void 0;
const base_entity_1 = require("../../../core/entity/base.entity");
const typeorm_1 = require("typeorm");
const iot_auth_info_entity_1 = require("./iot-auth-info.entity");
let IotBoardPersonal = class IotBoardPersonal extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], IotBoardPersonal.prototype, "userIdx", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], IotBoardPersonal.prototype, "authIdx", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 32,
    }),
    __metadata("design:type", String)
], IotBoardPersonal.prototype, "cageName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], IotBoardPersonal.prototype, "currentUvbLight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], IotBoardPersonal.prototype, "currentHeatingLight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], IotBoardPersonal.prototype, "autoChkLight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], IotBoardPersonal.prototype, "autoChkTemp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], IotBoardPersonal.prototype, "autoChkHumid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IotBoardPersonal.prototype, "currentTemp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IotBoardPersonal.prototype, "currentTemp2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IotBoardPersonal.prototype, "maxTemp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IotBoardPersonal.prototype, "minTemp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IotBoardPersonal.prototype, "currentHumid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IotBoardPersonal.prototype, "currentHumid2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IotBoardPersonal.prototype, "maxHumid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IotBoardPersonal.prototype, "minHumid", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 32,
    }),
    __metadata("design:type", String)
], IotBoardPersonal.prototype, "usage", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 32,
    }),
    __metadata("design:type", String)
], IotBoardPersonal.prototype, "autoLightUtctimeOn", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 32,
    }),
    __metadata("design:type", String)
], IotBoardPersonal.prototype, "autoLightUtctimeOff", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => iot_auth_info_entity_1.IotAuthInfo),
    (0, typeorm_1.JoinColumn)({ name: 'auth_idx' }),
    __metadata("design:type", iot_auth_info_entity_1.IotAuthInfo)
], IotBoardPersonal.prototype, "iotAuthInfo", void 0);
IotBoardPersonal = __decorate([
    (0, typeorm_1.Entity)()
], IotBoardPersonal);
exports.IotBoardPersonal = IotBoardPersonal;
//# sourceMappingURL=iot-board-personal.entity.js.map