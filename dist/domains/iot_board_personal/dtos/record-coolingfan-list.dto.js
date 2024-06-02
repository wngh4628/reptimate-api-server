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
exports.RecordcoolingfanListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const record_list_dto_1 = require("./record-list.dto");
class RecordcoolingfanListDto extends (0, swagger_1.PartialType)(record_list_dto_1.RecordListDto) {
    constructor(iotControlRecord) {
        super();
        this.idx = iotControlRecord.idx;
        this.coolingFan = iotControlRecord.coolingFan;
        this.type = iotControlRecord.type;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '쿨링팬 현황',
        default: 1,
    }),
    __metadata("design:type", Number)
], RecordcoolingfanListDto.prototype, "coolingFan", void 0);
exports.RecordcoolingfanListDto = RecordcoolingfanListDto;
//# sourceMappingURL=record-coolingfan-list.dto.js.map