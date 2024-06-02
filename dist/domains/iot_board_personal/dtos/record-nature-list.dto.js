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
exports.RecordNatureListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const record_list_dto_1 = require("./record-list.dto");
class RecordNatureListDto extends (0, swagger_1.PartialType)(record_list_dto_1.RecordListDto) {
    constructor(iotNatureRecord) {
        super();
        this.idx = iotNatureRecord.idx;
        this.currentTemp = iotNatureRecord.currentTemp;
        this.currentHumid = iotNatureRecord.currentHumid;
        this.currentTemp2 = iotNatureRecord.currentTemp2;
        this.currentHumid2 = iotNatureRecord.currentHumid2;
        this.type = iotNatureRecord.type;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '현재 온도 1',
        default: '0.0',
    }),
    __metadata("design:type", String)
], RecordNatureListDto.prototype, "currentTemp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '현재 습도 1',
        default: 'true',
    }),
    __metadata("design:type", String)
], RecordNatureListDto.prototype, "currentHumid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '현재 온도 2',
        default: 'true',
    }),
    __metadata("design:type", String)
], RecordNatureListDto.prototype, "currentTemp2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '현재 습도 2',
        default: 'true',
    }),
    __metadata("design:type", String)
], RecordNatureListDto.prototype, "currentHumid2", void 0);
exports.RecordNatureListDto = RecordNatureListDto;
//# sourceMappingURL=record-nature-list.dto.js.map