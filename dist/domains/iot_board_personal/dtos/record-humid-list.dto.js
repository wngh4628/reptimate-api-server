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
exports.RecordHumidListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const record_list_dto_1 = require("./record-list.dto");
class RecordHumidListDto extends (0, swagger_1.PartialType)(record_list_dto_1.RecordListDto) {
    constructor(iotNatureRecord) {
        super();
        this.idx = iotNatureRecord.idx;
        this.currentHumid = iotNatureRecord.currentHumid;
        this.currentHumid2 = iotNatureRecord.currentHumid2;
        this.type = iotNatureRecord.type;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '현재 습도 1',
        default: 'true',
    }),
    __metadata("design:type", String)
], RecordHumidListDto.prototype, "currentHumid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '현재 습도 2',
        default: 'true',
    }),
    __metadata("design:type", String)
], RecordHumidListDto.prototype, "currentHumid2", void 0);
exports.RecordHumidListDto = RecordHumidListDto;
//# sourceMappingURL=record-humid-list.dto.js.map