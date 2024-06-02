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
exports.IotNaturePageRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const page_1 = require("../../../core/page");
class IotNaturePageRequest extends page_1.PageRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '보드 인덱스',
        default: 66,
    }),
    __metadata("design:type", Number)
], IotNaturePageRequest.prototype, "boardIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `센서 필터\n
        - 기본(전체)
        - 온도(temp)\n
        - 습도(humid)`,
        enum: ['default', 'temp', 'humid'],
        default: 'default',
    }),
    __metadata("design:type", String)
], IotNaturePageRequest.prototype, "sensor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '선택한 날짜',
        default: '2023-05-07',
    }),
    __metadata("design:type", Date)
], IotNaturePageRequest.prototype, "date", void 0);
exports.IotNaturePageRequest = IotNaturePageRequest;
//# sourceMappingURL=iot-nature-page.js.map