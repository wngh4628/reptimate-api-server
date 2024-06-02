"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MypageModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_ex_module_1 = require("../../core/typeorm-ex.module");
const mypage_service_1 = require("./mypage.service");
const mypage_controller_1 = require("./mypage.controller");
const board_repository_1 = require("../board/repositories/board.repository");
const board_commercial_repository_1 = require("../board/repositories/board-commercial.repository");
const board_auction_repository_1 = require("../board/repositories/board-auction.repository");
const board_comment_repository_1 = require("../board/repositories/board-comment.repository");
const board_reply_repository_1 = require("../board/repositories/board-reply.repository");
const chat_conversation_repository_1 = require("./repositories/chat-conversation.repository");
const board_bookmark_repository_1 = require("../board/repositories/board-bookmark.repository");
const value_analyzer_repository_1 = require("./repositories/value-analyzer.repository");
let MypageModule = class MypageModule {
};
MypageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([
                board_repository_1.BoardRepository,
                board_commercial_repository_1.BoardCommercialRepository,
                board_auction_repository_1.BoardAuctionRepository,
                board_reply_repository_1.BoardReplyRepository,
                chat_conversation_repository_1.ChatConversationRepository,
                board_bookmark_repository_1.BoardBookmarkRepository,
                value_analyzer_repository_1.ValueAnalyzerRepository
            ]),
        ],
        controllers: [mypage_controller_1.Mypagecontroller],
        providers: [mypage_service_1.MypageService, board_comment_repository_1.BoardCommentRepository],
        exports: [mypage_service_1.MypageService, typeorm_ex_module_1.TypeOrmExModule],
    })
], MypageModule);
exports.MypageModule = MypageModule;
//# sourceMappingURL=mypage.module.js.map