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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MorphListController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const swagger_tags_1 = require("../../core/swagger/swagger-tags");
const api_error_common_response_1 = require("../../core/swagger/api-error-common-response");
const morph_list_service_1 = require("./morph_list.service");
const api_created_response_1 = require("../../core/swagger/api-created-response");
const http_response_1 = require("../../core/http/http-response");
let MorphListController = class MorphListController {
    constructor(morphListService) {
        this.morphListService = morphListService;
    }
    async getMorph(res) {
        const result = await this.morphListService.getMorphInfo();
        return http_response_1.default.created(res, { body: result });
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '모프 리스트 조회',
        description: `목록 조회 `,
    }),
    (0, api_created_response_1.ApiCreatedResponseTemplate)(),
    (0, common_1.Get)('/get_morph_list'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MorphListController.prototype, "getMorph", null);
MorphListController = __decorate([
    (0, swagger_1.ApiTags)(swagger_tags_1.SwaggerTag.MORPH),
    (0, api_error_common_response_1.ApiCommonErrorResponseTemplate)(),
    (0, common_1.Controller)('morphlist'),
    __metadata("design:paramtypes", [morph_list_service_1.MorphListService])
], MorphListController);
exports.MorphListController = MorphListController;
//# sourceMappingURL=morph_list.controller.js.map