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
exports.RecordListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const date_utils_1 = require("../../../utils/date-utils");
class RecordListDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '인덱스',
        default: 1,
    }),
    __metadata("design:type", Number)
], RecordListDto.prototype, "idx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '자동, 수동 여부 1. auto, 2. passive',
        default: 1,
    }),
    __metadata("design:type", Number)
], RecordListDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '생성일',
        default: date_utils_1.default.momentNow(),
    }),
    __metadata("design:type", Date)
], RecordListDto.prototype, "createdAt", void 0);
exports.RecordListDto = RecordListDto;
//# sourceMappingURL=record-list.dto.js.map