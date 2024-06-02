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
exports.Mypagecontroller = void 0;
const swagger_1 = require("@nestjs/swagger");
const api_error_common_response_1 = require("../../core/swagger/api-error-common-response");
const swagger_tags_1 = require("../../core/swagger/swagger-tags");
const use_auth_1 = require("../auth/auth-guards/use-auth");
const common_1 = require("@nestjs/common");
const apt_error_response_1 = require("../../core/swagger/apt-error-response");
const http_status_codes_1 = require("http-status-codes");
const http_error_objects_1 = require("../../core/http/http-error-objects");
const mypage_service_1 = require("./mypage.service");
const auth_user_decorator_1 = require("../../core/decorators/auth-user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const http_response_1 = require("../../core/http/http-response");
const board_category_page_1 = require("../board/dtos/board-category-page");
const page_1 = require("../../core/page");
let Mypagecontroller = class Mypagecontroller {
    constructor(mypageService) {
        this.mypageService = mypageService;
    }
    async findBoard(res, user, pageRequest) {
        const board = await this.mypageService.findBoard(user, pageRequest);
        return http_response_1.default.ok(res, board);
    }
    async findReply(res, user, pageRequest) {
        const board = await this.mypageService.findReply(user, pageRequest);
        return http_response_1.default.ok(res, board);
    }
    async findMyAuction(res, user, pageRequest) {
        const board = await this.mypageService.findMyAuction(user, pageRequest);
        return http_response_1.default.ok(res, board);
    }
    async findMyBidding(res, user, pageRequest) {
        const board = await this.mypageService.findMyBidding(user, pageRequest);
        return http_response_1.default.ok(res, board);
    }
    async findBookMark(res, user, pageRequest, category) {
        const result = await this.mypageService.findBookMark(user, pageRequest, category);
        return http_response_1.default.ok(res, result);
    }
    async getValueAnalysisResultsList(res, user) {
        const result = await this.mypageService.getValueAnalysisResultsList(user);
        return http_response_1.default.ok(res, result);
    }
    async getValueAnalysisResultDetail(res, user, idx) {
        const result = await this.mypageService.getValueAnalysisResultDetail(user, idx);
        return http_response_1.default.ok(res, result);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '내가 작성한 게시글 조회',
        description: '게시글(자유, 질문, 마켓, 분양) 중 내가 작성한 글만 조회.',
    }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [
                http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET,
                http_error_objects_1.HttpErrorConstants.CANNOT_FIND_DIARY,
            ],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/board'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User,
        page_1.PageRequest]),
    __metadata("design:returntype", Promise)
], Mypagecontroller.prototype, "findBoard", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '내가 작성한 댓글 조회',
        description: '댓글(자유, 질문, 마켓, 분양) 중 내가 작성한 댓글만 조회.',
    }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [
                http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET,
                http_error_objects_1.HttpErrorConstants.CANNOT_FIND_DIARY,
            ],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/reply'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User,
        page_1.PageRequest]),
    __metadata("design:returntype", Promise)
], Mypagecontroller.prototype, "findReply", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '내가 작성한 경매 조회',
        description: '내가 작성한 경매 조회.',
    }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [
                http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET,
                http_error_objects_1.HttpErrorConstants.CANNOT_FIND_DIARY,
            ],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/auction'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User,
        board_category_page_1.BoardCategoryPageRequest]),
    __metadata("design:returntype", Promise)
], Mypagecontroller.prototype, "findMyAuction", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '내가 작성한 경매 조회',
        description: '내가 작성한 경매 조회.',
    }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [
                http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET,
                http_error_objects_1.HttpErrorConstants.CANNOT_FIND_DIARY,
            ],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/bid'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User,
        page_1.PageRequest]),
    __metadata("design:returntype", Promise)
], Mypagecontroller.prototype, "findMyBidding", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '내가 북마크한 게시글 조회',
        description: '내가 북마크한 게시글 조회. auction만 카테고리에 auction으로 쓰고 나머지는 board',
    }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [
                http_error_objects_1.HttpErrorConstants.CANNOT_FIND_PET,
                http_error_objects_1.HttpErrorConstants.CANNOT_FIND_DIARY,
            ],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/bookmark/:category'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __param(2, (0, common_1.Query)()),
    __param(3, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User,
        page_1.PageRequest, String]),
    __metadata("design:returntype", Promise)
], Mypagecontroller.prototype, "findBookMark", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '가치판단 결과들의 리스트 조회',
        description: '해당 계정으로 저장한 가치판단 결과들의 리스트를 모두 불러옵니다.',
    }),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/valueAnalysisResultsList'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], Mypagecontroller.prototype, "getValueAnalysisResultsList", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '가치판단 결과 상세보기',
        description: '특정 idx의 가치판단 결과의 모든 데이터를 불러옵니다.',
    }),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/valueAnalysisResultDetail:idx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __param(2, (0, common_1.Param)('idx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User, Number]),
    __metadata("design:returntype", Promise)
], Mypagecontroller.prototype, "getValueAnalysisResultDetail", null);
Mypagecontroller = __decorate([
    (0, swagger_1.ApiTags)(swagger_tags_1.SwaggerTag.MYPAGE),
    (0, api_error_common_response_1.ApiCommonErrorResponseTemplate)(),
    (0, common_1.Controller)('/mypage'),
    __metadata("design:paramtypes", [mypage_service_1.MypageService])
], Mypagecontroller);
exports.Mypagecontroller = Mypagecontroller;
//# sourceMappingURL=mypage.controller.js.map