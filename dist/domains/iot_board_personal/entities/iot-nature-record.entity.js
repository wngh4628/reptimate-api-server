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
exports.IotNatureRecord = void 0;
const base_entity_1 = require("../../../core/entity/base.entity");
const typeorm_1 = require("typeorm");
const constants_1 = require("./constants");
let IotNatureRecord = class IotNatureRecord extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], IotNatureRecord.prototype, "boardIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IotNatureRecord.prototype, "currentTemp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IotNatureRecord.prototype, "currentHumid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IotNatureRecord.prototype, "currentTemp2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IotNatureRecord.prototype, "currentHumid2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', name: 'type', enum: constants_1.ControlType }),
    __metadata("design:type", Number)
], IotNatureRecord.prototype, "type", void 0);
IotNatureRecord = __decorate([
    (0, typeorm_1.Entity)()
], IotNatureRecord);
exports.IotNatureRecord = IotNatureRecord;
//# sourceMappingURL=iot-nature-record.entity.js.map