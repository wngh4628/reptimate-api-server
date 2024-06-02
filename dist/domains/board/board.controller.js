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
exports.Boardcontroller = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const api_created_response_1 = require("../../core/swagger/api-created-response");
const api_error_common_response_1 = require("../../core/swagger/api-error-common-response");
const swagger_tags_1 = require("../../core/swagger/swagger-tags");
const use_auth_1 = require("../auth/auth-guards/use-auth");
const auth_user_decorator_1 = require("../../core/decorators/auth-user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const http_response_1 = require("../../core/http/http-response");
const board_service_1 = require("./board.service");
const common_1 = require("@nestjs/common");
const apt_error_response_1 = require("../../core/swagger/apt-error-response");
const http_status_codes_1 = require("http-status-codes");
const http_error_objects_1 = require("../../core/http/http-error-objects");
const api_ok_pagination_response_1 = require("../../core/swagger/api-ok-pagination-response");
const board_list_dto_1 = require("./dtos/board-list.dto");
const page_1 = require("../../core/page");
const api_ok_response_1 = require("../../core/swagger/api-ok-response");
const board_detail_dto_1 = require("./dtos/board-detail-dto");
const update_board_dto_1 = require("./dtos/update-board.dto");
const board_comment_dto_1 = require("./dtos/board-comment.dto");
const create_board_dto_1 = require("./dtos/create-board.dto");
const board_comment_entity_1 = require("./entities/board-comment.entity");
const board_category_page_1 = require("./dtos/board-category-page");
const update_stream_key_dto_1 = require("./dtos/update-stream-key.dto");
const api_ok_pagination_response_array_1 = require("../../core/swagger/api-ok-pagination-response-array");
let Boardcontroller = class Boardcontroller {
    constructor(boardService) {
        this.boardService = boardService;
    }
    async createBoard(res, dto, user) {
        const result = await this.boardService.createBoard(dto, user.idx);
        return http_response_1.default.created(res, { body: result });
    }
    async getBoard(res, pageRequest) {
        const boards = await this.boardService.findAllBoard(pageRequest);
        return http_response_1.default.ok(res, boards);
    }
    async getAuction(res, pageRequest) {
        const boards = await this.boardService.findAuction(pageRequest);
        return http_response_1.default.ok(res, boards);
    }
    async findBoard(res, boardIdx, userIdx) {
        const board = await this.boardService.findBoard(boardIdx, userIdx);
        return http_response_1.default.ok(res, board);
    }
    async removeBoard(res, boardIdx, user) {
        await this.boardService.removeBoard(boardIdx, user.idx);
        return http_response_1.default.ok(res);
    }
    async updateBoard(res, boardIdx, user, dto) {
        const board = await this.boardService.updateBoard(boardIdx, dto, user);
        return http_response_1.default.ok(res, board);
    }
    async updateStreamKey(res, boardAuctionIdx, dto) {
        const updatedStreamKey = await this.boardService.updateStreamKey(boardAuctionIdx, dto);
        return http_response_1.default.ok(res, updatedStreamKey);
    }
    async createcomment(res, dto, user, file) {
        const result = await this.boardService.createComment(dto, user.idx, file);
        return http_response_1.default.created(res, { body: result });
    }
    async removecomment(res, boardIdx, category, commentIdx, user) {
        const result = await this.boardService.removeComment(commentIdx, boardIdx, user.idx, category);
        return http_response_1.default.ok(res, { body: result });
    }
    async getcomment(res, pageRequest, category, boardIdx) {
        const comments = await this.boardService.findBoardComment(pageRequest, boardIdx, category);
        return http_response_1.default.ok(res, comments);
    }
    async updatecomment(res, commentIdx, user, dto, file) {
        const result = await this.boardService.updateComment(dto, commentIdx, user.idx, file);
        return http_response_1.default.created(res, { body: result });
    }
    async boardBookmark(res, boardIdx, category, user) {
        const result = await this.boardService.RegisterBoardBookmark(boardIdx, user.idx, category);
        return http_response_1.default.created(res, { body: result });
    }
    async updateBookmark(res, boardIdx, user) {
        const board = await this.boardService.boardBookmarkRemove(boardIdx, user.idx);
        return http_response_1.default.ok(res, board);
    }
    async findRecommendItem(res, user) {
        const board = await this.boardService.findRecommendItem(user.idx);
        return http_response_1.default.ok(res, board);
    }
    async searchTotal(res, keyword) {
        const result = await this.boardService.searchTotal(keyword);
        return http_response_1.default.ok(res, result);
    }
    async searchCategory(res, keyword, pageRequest) {
        const result = await this.boardService.searchCategory(keyword, pageRequest);
        return http_response_1.default.ok(res, result);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '게시판 등록',
        description: '각 게시판 별로 등록한다.',
    }),
    (0, api_created_response_1.ApiCreatedResponseTemplate)({ type: create_board_dto_1.createBoardDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_USER],
        },
    ]),
    (0, swagger_1.ApiBody)({ type: create_board_dto_1.createBoardDto }),
    (0, use_auth_1.default)(),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_board_dto_1.createBoardDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "createBoard", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '게시판 조회',
        description: '게시판 카테고리에 따라 최신 정보를 조회합니다.',
    }),
    (0, api_ok_pagination_response_1.ApiOkPaginationResponseTemplate)({ type: board_list_dto_1.BoardListDto }),
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, board_category_page_1.BoardCategoryPageRequest]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "getBoard", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '경매 게시판 조회',
        description: '경매 게시판을 상태 따라 최신 정보를 조회합니다.',
    }),
    (0, api_ok_pagination_response_1.ApiOkPaginationResponseTemplate)({ type: board_list_dto_1.BoardListDto }),
    (0, common_1.Get)('/auction'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, board_category_page_1.BoardCategoryPageRequest]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "getAuction", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '게시판 상세조회',
        description: '게시판을 상세 조회 기능입니다.',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)({ type: board_detail_dto_1.BoardDetailDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_BOARD],
        },
    ]),
    (0, common_1.Get)('/:boardIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('boardIdx')),
    __param(2, (0, common_1.Query)('userIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "findBoard", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '게시글 삭제',
        description: '게시글을 삭제한다.',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)(),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_BOARD],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Delete)('/:boardIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('boardIdx')),
    __param(2, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "removeBoard", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '게시글 수정',
        description: '게시글을 수정한다.',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)({ type: board_detail_dto_1.BoardDetailDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_BOARD],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Patch)('/:boardIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('boardIdx')),
    __param(2, (0, auth_user_decorator_1.default)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, user_entity_1.User,
        update_board_dto_1.UpdateBoardDto]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "updateBoard", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '경매 게시글 스트림키 수정',
        description: '경매 게시글의 스트림키를 수정한다.',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)({ type: update_stream_key_dto_1.UpdateStreamKeyDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_AUCTION_BOARD],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Patch)('/Streamkey/:boardAuctionIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('boardAuctionIdx')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_stream_key_dto_1.UpdateStreamKeyDto]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "updateStreamKey", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '댓글 & 답글 등록',
        description: '댓글 & 답글을 등록한다.',
    }),
    (0, api_created_response_1.ApiCreatedResponseTemplate)({ type: board_comment_dto_1.CommentDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_USER],
        },
    ]),
    (0, swagger_1.ApiBody)({ type: board_comment_dto_1.CommentDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, use_auth_1.default)(),
    (0, common_1.Post)('/comment'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, auth_user_decorator_1.default)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, board_comment_dto_1.CommentDto,
        user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "createcomment", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '댓글 & 답글 삭제',
        description: '댓글 & 답글을 삭제합니다..',
    }),
    (0, use_auth_1.default)(),
    (0, common_1.Delete)('/comment/:commentIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('boardIdx')),
    __param(2, (0, common_1.Query)('category')),
    __param(3, (0, common_1.Param)('commentIdx')),
    __param(4, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, String, Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "removecomment", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '댓글 & 답글 조회',
        description: '게시글에 달린 댓글 정보를 최신순에 최대 20개씩 조회합니다.',
    }),
    (0, api_ok_pagination_response_1.ApiOkPaginationResponseTemplate)({ type: board_comment_entity_1.default }),
    (0, common_1.Get)('/:boardIdx/:category'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, common_1.Param)('category')),
    __param(3, (0, common_1.Param)('boardIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, page_1.PageRequest, String, Number]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "getcomment", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '댓글 & 답글 수정',
        description: '댓글을 수정한다.',
    }),
    (0, api_created_response_1.ApiCreatedResponseTemplate)({ type: board_comment_dto_1.CommentDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_USER],
        },
    ]),
    (0, swagger_1.ApiBody)({ type: board_comment_dto_1.CommentDto }),
    (0, use_auth_1.default)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.Patch)('/comment/:commentIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('commentIdx')),
    __param(2, (0, auth_user_decorator_1.default)()),
    __param(3, (0, common_1.Body)()),
    __param(4, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, user_entity_1.User,
        board_comment_dto_1.CommentDto, Object]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "updatecomment", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '게시글 북마크 등록 등록',
        description: '게시글에 대한 북마크를 합니다.',
    }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_USER],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Post)('/:boardIdx/Bookmark/:category'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('boardIdx')),
    __param(2, (0, common_1.Param)('category')),
    __param(3, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "boardBookmark", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '북마크 취소',
        description: '게시글에 대한 북마크를 취소합니다.',
    }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.BOOKMAEK_NOT_EXIST],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Delete)('/:boardIdx/Bookmark'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('boardIdx')),
    __param(2, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "updateBookmark", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '분양 게시글 맞춤 추천',
        description: '사용자 관심도에 따라, 5개의 게시글을 추천을 합니다. 추천할 항목이 없으면 null을 반환합니다',
    }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_BOARD],
        },
    ]),
    (0, api_ok_pagination_response_array_1.ApiOkArrayResponseTemplate)({ type: board_list_dto_1.BoardListDto }),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/adoption/recommend/user'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "findRecommendItem", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '통합 검색',
        description: 'adoption, auction, market, ask, free 게시판 중 최대 5개까지 조회합니다.',
    }),
    (0, api_ok_pagination_response_1.ApiOkPaginationResponseTemplate)({ type: board_list_dto_1.BoardListDto }),
    (0, common_1.Get)('/search/total/:keyword'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "searchTotal", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '특정 게시판 더보기 조회',
        description: 'adoption, auction, market, ask, free 중에서 한 카테고리 키워드 검색',
    }),
    (0, api_ok_pagination_response_1.ApiOkPaginationResponseTemplate)({ type: board_list_dto_1.BoardListDto }),
    (0, common_1.Get)('/search/category/:keyword'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('keyword')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, board_category_page_1.BoardCategoryPageRequest]),
    __metadata("design:returntype", Promise)
], Boardcontroller.prototype, "searchCategory", null);
Boardcontroller = __decorate([
    (0, swagger_1.ApiTags)(swagger_tags_1.SwaggerTag.BOARD),
    (0, api_error_common_response_1.ApiCommonErrorResponseTemplate)(),
    (0, common_1.Controller)('/board'),
    __metadata("design:paramtypes", [board_service_1.BoardService])
], Boardcontroller);
exports.Boardcontroller = Boardcontroller;
//# sourceMappingURL=board.controller.js.map