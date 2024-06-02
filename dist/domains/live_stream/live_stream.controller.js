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
exports.LiveStreamController = void 0;
const common_1 = require("@nestjs/common");
const api_error_common_response_1 = require("../../core/swagger/api-error-common-response");
const swagger_1 = require("@nestjs/swagger");
const api_created_response_1 = require("../../core/swagger/api-created-response");
const live_stream_service_1 = require("./live_stream.service");
const swagger_tags_1 = require("../../core/swagger/swagger-tags");
const steam_key_dto_1 = require("./dtos/steam-key.dto");
const http_response_1 = require("../../core/http/http-response");
let LiveStreamController = class LiveStreamController {
    constructor(liveStreamService) {
        this.liveStreamService = liveStreamService;
    }
    async startLiveStream(res, dto) {
        const result = await this.liveStreamService.setLiveStreamInfo('start', dto);
        return http_response_1.default.created(res, { body: result });
    }
    async endLiveStream(res, dto) {
        const result = await this.liveStreamService.setLiveStreamInfo('end', dto);
        return http_response_1.default.created(res, { body: result });
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '라이브 스트리밍 시작 전 경매방에 스트림키가 존재하는지 체크',
        description: `스트림 키가 경매 방에 있는 키일 경우에 송신을 허락한다.`,
    }),
    (0, swagger_1.ApiBody)({
        type: steam_key_dto_1.StreamKeyDto,
    }),
    (0, api_created_response_1.ApiCreatedResponseTemplate)(),
    (0, common_1.Post)('/live_start'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, steam_key_dto_1.StreamKeyDto]),
    __metadata("design:returntype", Promise)
], LiveStreamController.prototype, "startLiveStream", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '라이브 스트리밍 종료',
        description: `라이브 종료 시간을 수정`,
    }),
    (0, swagger_1.ApiBody)({
        type: steam_key_dto_1.StreamKeyDto,
    }),
    (0, api_created_response_1.ApiCreatedResponseTemplate)(),
    (0, common_1.Post)('/live_end'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, steam_key_dto_1.StreamKeyDto]),
    __metadata("design:returntype", Promise)
], LiveStreamController.prototype, "endLiveStream", null);
LiveStreamController = __decorate([
    (0, swagger_1.ApiTags)(swagger_tags_1.SwaggerTag.LIVE),
    (0, api_error_common_response_1.ApiCommonErrorResponseTemplate)(),
    (0, common_1.Controller)('livestream'),
    __metadata("design:paramtypes", [live_stream_service_1.LiveStreamService])
], LiveStreamController);
exports.LiveStreamController = LiveStreamController;
//# sourceMappingURL=live_stream.controller.js.map