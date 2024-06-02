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
exports.CreateIotAuthDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const page_1 = require("../../../core/page");
class CreateIotAuthDto extends page_1.PageRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '유저 고유번호',
        default: '유저 고유번호를 입력하는 부분입니다. ',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateIotAuthDto.prototype, "userIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '보드 임시번호',
        default: '사용자에게 보여줄 보드 임시번호 입니다.',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateIotAuthDto.prototype, "boardTempName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '다이어리 내용',
        default: '다이어리 내용입니다.',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateIotAuthDto.prototype, "boardSerial", void 0);
exports.CreateIotAuthDto = CreateIotAuthDto;
//# sourceMappingURL=create-iot-auth.dto.js.map