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
exports.IotControlRecord = void 0;
const base_entity_1 = require("../../../core/entity/base.entity");
const typeorm_1 = require("typeorm");
const constants_1 = require("./constants");
let IotControlRecord = class IotControlRecord extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], IotControlRecord.prototype, "boardIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], IotControlRecord.prototype, "uvbLight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], IotControlRecord.prototype, "heatingLight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], IotControlRecord.prototype, "waterPump", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], IotControlRecord.prototype, "coolingFan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', name: 'type', enum: constants_1.ControlType }),
    __metadata("design:type", Number)
], IotControlRecord.prototype, "type", void 0);
IotControlRecord = __decorate([
    (0, typeorm_1.Entity)()
], IotControlRecord);
exports.IotControlRecord = IotControlRecord;
//# sourceMappingURL=iot-control-record.entity.js.map