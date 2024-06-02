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
exports.RecordControlListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const record_list_dto_1 = require("./record-list.dto");
class RecordControlListDto extends (0, swagger_1.PartialType)(record_list_dto_1.RecordListDto) {
    constructor(iotControlRecord) {
        super();
        this.idx = iotControlRecord.idx;
        this.uvbLight = iotControlRecord.uvbLight;
        this.heatingLight = iotControlRecord.heatingLight;
        this.waterpump = iotControlRecord.waterPump;
        this.coolingfan = iotControlRecord.coolingFan;
        this.type = iotControlRecord.type;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'uvb 램프 현황',
        default: 1,
    }),
    __metadata("design:type", Number)
], RecordControlListDto.prototype, "uvbLight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '온열 램프 현황',
        default: 1,
    }),
    __metadata("design:type", Number)
], RecordControlListDto.prototype, "heatingLight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '워터펌프 현황',
        default: 1,
    }),
    __metadata("design:type", Number)
], RecordControlListDto.prototype, "waterpump", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '쿨링팬 현황',
        default: 1,
    }),
    __metadata("design:type", Number)
], RecordControlListDto.prototype, "coolingfan", void 0);
exports.RecordControlListDto = RecordControlListDto;
//# sourceMappingURL=record-control-list.dto.js.map