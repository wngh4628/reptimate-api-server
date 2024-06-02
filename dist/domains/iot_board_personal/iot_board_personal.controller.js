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
exports.IotBoardPersonalController = void 0;
const common_1 = require("@nestjs/common");
const iot_board_personal_service_1 = require("./iot_board_personal.service");
const swagger_1 = require("@nestjs/swagger");
const page_1 = require("../../core/page");
const use_auth_1 = require("../auth/auth-guards/use-auth");
const auth_user_decorator_1 = require("../../core/decorators/auth-user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const swagger_tags_1 = require("../../core/swagger/swagger-tags");
const api_error_common_response_1 = require("../../core/swagger/api-error-common-response");
const http_response_1 = require("../../core/http/http-response");
const iot_nature_page_1 = require("./dtos/iot-nature-page");
const iot_control_page_1 = require("./dtos/iot-control-page");
let IotBoardPersonalController = class IotBoardPersonalController {
    constructor(iotPersonalService) {
        this.iotPersonalService = iotPersonalService;
    }
    async getMyBoardList(res, user, pageRequest) {
        const result = await this.iotPersonalService.getMyBoardList(user.idx, pageRequest);
        return http_response_1.default.ok(res, result);
    }
    async getBoardList(res, user, pageRequest) {
        const result = await this.iotPersonalService.getBoardList(user.idx, pageRequest);
        return http_response_1.default.ok(res, result);
    }
    async getNatureList(res, user, pageRequest) {
        const result = await this.iotPersonalService.getNatureList(pageRequest);
        return http_response_1.default.ok(res, result);
    }
    async getControlList(res, user, pageRequest) {
        const result = await this.iotPersonalService.getControlList(pageRequest);
        return http_response_1.default.ok(res, result);
    }
    async createSerialBoard(res, user) {
        const currentAuthInfo = await this.iotPersonalService.getAuthInfo_current();
        const authNum = currentAuthInfo.boardTempName.split('KR_B')[1];
        const newAuthNum = parseInt(authNum) + 1;
        const bigAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ';
        const string_length = 20;
        let randomstring = '';
        for (let i = 0; i < string_length; i++) {
            const rnum = Math.floor(Math.random() * bigAlphabet.length);
            randomstring += bigAlphabet.substring(rnum, rnum + 1);
        }
        const chkDuplicate = await this.iotPersonalService.chkAuthInfoDuplicate(randomstring);
        if (chkDuplicate == null) {
            const iot_auth_info = {
                userIdx: user.idx,
                boardTempName: 'KR_B' + newAuthNum,
                boardSerial: randomstring,
            };
            const result = await this.iotPersonalService.createAuthInfo(iot_auth_info);
            return http_response_1.default.ok(res, result);
        }
        else {
            const result = false;
            return http_response_1.default.ok(res, result);
        }
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '내 보드 정보 리스트',
        description: '내가 등록한 보드의 리스트를 가져온다.',
    }),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/myboardlist'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User,
        page_1.PageRequest]),
    __metadata("design:returntype", Promise)
], IotBoardPersonalController.prototype, "getMyBoardList", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '전체 보드 정보 리스트',
        description: '전체 보드의 리스트를 가져온다.',
    }),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/boardlist'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User,
        page_1.PageRequest]),
    __metadata("design:returntype", Promise)
], IotBoardPersonalController.prototype, "getBoardList", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '선택한 보드의 온습도 기록 리스트',
        description: '선택한 보드의 기록된 온습도의 정보 리스트를 가져온다.',
    }),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/naturelist'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User,
        iot_nature_page_1.IotNaturePageRequest]),
    __metadata("design:returntype", Promise)
], IotBoardPersonalController.prototype, "getNatureList", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '선택한 보드의 제어모듈 기록 리스트',
        description: '선택한 보드의 기록된 제어모듈 정보 리스트를 가져온다.',
    }),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/controllist'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User,
        iot_control_page_1.IotControlPageRequest]),
    __metadata("design:returntype", Promise)
], IotBoardPersonalController.prototype, "getControlList", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '새로운 시리얼 보드를 생성',
        description: '새로운 시리얼 보드를 생성한다. 보드 시퀀스 가장 초기에 생성하는 부분이다. ',
    }),
    (0, use_auth_1.default)(),
    (0, common_1.Post)('/creat_serialboard'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], IotBoardPersonalController.prototype, "createSerialBoard", null);
IotBoardPersonalController = __decorate([
    (0, swagger_1.ApiTags)(swagger_tags_1.SwaggerTag.IOT),
    (0, api_error_common_response_1.ApiCommonErrorResponseTemplate)(),
    (0, common_1.Controller)('iotpersonal'),
    __metadata("design:paramtypes", [iot_board_personal_service_1.IotBoardPersonalService])
], IotBoardPersonalController);
exports.IotBoardPersonalController = IotBoardPersonalController;
//# sourceMappingURL=iot_board_personal.controller.js.map