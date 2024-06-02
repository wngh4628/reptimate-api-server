"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_ex_module_1 = require("../../core/typeorm-ex.module");
const board_controller_1 = require("./board.controller");
const board_service_1 = require("./board.service");
const board_repository_1 = require("./repositories/board.repository");
const board_image_repository_1 = require("./repositories/board-image.repository");
const board_comment_repository_1 = require("./repositories/board-comment.repository");
const board_reply_repository_1 = require("./repositories/board-reply.repository");
const board_bookmark_repository_1 = require("./repositories/board-bookmark.repository");
const board_commercial_repository_1 = require("./repositories/board-commercial.repository");
const user_repository_1 = require("../user/repositories/user.repository");
const board_auction_repository_1 = require("./repositories/board-auction.repository");
const live_stream_repository_1 = require("../live_stream/repositories/live-stream.repository");
const client_recommend_1 = require("../../utils/client-recommend");
const elastic_search_1 = require("./providers/elastic-search");
const elasticsearch_1 = require("@nestjs/elasticsearch");
let BoardModule = class BoardModule {
};
BoardModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([
                board_repository_1.BoardRepository,
                board_image_repository_1.BoardImageRepository,
                board_reply_repository_1.BoardReplyRepository,
                board_comment_repository_1.BoardCommentRepository,
                board_bookmark_repository_1.BoardBookmarkRepository,
                board_commercial_repository_1.BoardCommercialRepository,
                board_auction_repository_1.BoardAuctionRepository,
                user_repository_1.UserRepository,
                live_stream_repository_1.LiveStreamRepository,
            ]),
            elasticsearch_1.ElasticsearchModule.register({
                node: process.env.ELASICSEARCH_HOST,
            }),
        ],
        controllers: [board_controller_1.Boardcontroller],
        providers: [board_service_1.BoardService, client_recommend_1.ClientRecommend, elastic_search_1.BoardElasticSearch],
        exports: [board_service_1.BoardService, typeorm_ex_module_1.TypeOrmExModule],
    })
], BoardModule);
exports.BoardModule = BoardModule;
//# sourceMappingURL=board.module.js.map