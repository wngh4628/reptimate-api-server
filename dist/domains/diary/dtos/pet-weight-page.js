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
exports.PetWeightPageRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const page_1 = require("../../../core/page");
class PetWeightPageRequest extends page_1.PageRequest {
    get limit() {
        if (this.filter === 'month') {
            return 30;
        }
        return super.limit;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `필터\n
        - 기본(전체): 날짜기준으로 정렬
        - 주(week): 오늘날짜로부터 7일이내의 데이터 (최대 7개)
        - 월(month): 오늘날짜로부터 30일이내의 데이터. (최대 30개)
        - 년(year): 오늘날짜로부터 1년이내의 데이터의 월별 평균`,
        enum: ['default', 'week', 'month', 'year'],
        default: 'default',
    }),
    __metadata("design:type", String)
], PetWeightPageRequest.prototype, "filter", void 0);
exports.PetWeightPageRequest = PetWeightPageRequest;
//# sourceMappingURL=pet-weight-page.js.map