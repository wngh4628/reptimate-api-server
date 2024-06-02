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
exports.MypageService = void 0;
const common_1 = require("@nestjs/common");
const board_repository_1 = require("../board/repositories/board.repository");
const page_1 = require("../../core/page");
const board_commercial_repository_1 = require("../board/repositories/board-commercial.repository");
const board_auction_repository_1 = require("../board/repositories/board-auction.repository");
const board_comment_entity_1 = require("../board/entities/board-comment.entity");
const typeorm_1 = require("typeorm");
const chat_conversation_repository_1 = require("./repositories/chat-conversation.repository");
const board_bookmark_repository_1 = require("../board/repositories/board-bookmark.repository");
const value_analyzer_repository_1 = require("./repositories/value-analyzer.repository");
let MypageService = class MypageService {
    constructor(boardRepository, boardCommercialRepository, valueAnalyzerRepository, boardAuctionRepository, chatConversationRepository, boardBookmarkRepository, dataSource) {
        this.boardRepository = boardRepository;
        this.boardCommercialRepository = boardCommercialRepository;
        this.valueAnalyzerRepository = valueAnalyzerRepository;
        this.boardAuctionRepository = boardAuctionRepository;
        this.chatConversationRepository = chatConversationRepository;
        this.boardBookmarkRepository = boardBookmarkRepository;
        this.dataSource = dataSource;
    }
    async findBoard(user, pageRequest) {
        const [boards, totalCount] = await this.boardRepository.findAndCountByUserIdx(user.idx, pageRequest);
        const result = new page_1.Page(totalCount, boards, pageRequest);
        return result;
    }
    async findReply(user, pageRequest) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const totalQuery = `
        SELECT COUNT(*) AS total_count
        FROM (
            SELECT idx, category, board_idx, file_path, user_idx, description, created_at, updated_at, deleted_at
            FROM iot_project.board_reply
            WHERE user_idx = ? AND board_state = 'public'
            UNION ALL
            SELECT idx, category, board_idx, file_path, user_idx, description, created_at, updated_at, deleted_at
            FROM iot_project.board_comment
            WHERE user_idx = ? AND board_state = 'public'
        ) AS user_activity;
      `;
            const totalCount = await queryRunner.query(totalQuery, [
                user.idx,
                user.idx,
            ]);
            const getDataQuery = `
        SELECT idx, category, board_idx, file_path, user_idx, description, created_at, updated_at, deleted_at
        FROM iot_project.board_reply
        WHERE user_idx = ? AND board_state = 'public'
        UNION ALL
        SELECT idx, category, board_idx, file_path, user_idx, description, created_at, updated_at, deleted_at
        FROM iot_project.board_comment
        WHERE user_idx = ? AND board_state = 'public'
        ORDER BY created_at DESC
        LIMIT ? OFFSET ?;
      `;
            const userActivities = await queryRunner.query(getDataQuery, [
                user.idx,
                user.idx,
                pageRequest.limit,
                pageRequest.offset,
            ]);
            const returnData = [];
            for (const data of userActivities) {
                const boardComment = board_comment_entity_1.default.myPage(data);
                const board = await this.boardRepository.findOne({
                    where: {
                        idx: data.board_idx,
                    },
                });
                if (board !== null) {
                    boardComment.title = board.title;
                    boardComment.boardCategory = board.category;
                    returnData.push(boardComment);
                }
            }
            const result = new page_1.Page(totalCount[0].total_count, returnData, pageRequest);
            return result;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async findMyAuction(user, pageRequest) {
        const [boards, totalCount] = await this.boardRepository.findAndCountByAuctionMyPage(pageRequest, user.idx);
        const result = new page_1.Page(totalCount, boards, pageRequest);
        const usersInfoArr = [];
        for (const board of result.items) {
            const userDetails = {
                idx: user.idx,
                nickname: user.nickname,
                profilePath: user.profilePath,
            };
            board.UserInfo = userDetails;
            usersInfoArr.push(board);
        }
        result.items = usersInfoArr;
        const auctionInfoArr = [];
        for (const board of result.items) {
            const auctionInfo = await this.boardAuctionRepository.findOne({
                where: {
                    boardIdx: board.idx,
                },
            });
            board.boardAuction = auctionInfo;
            auctionInfoArr.push(board);
        }
        result.items = auctionInfoArr;
        return result;
    }
    async findMyBidding(user, pageRequest) {
        const [datas, totalCount] = await this.chatConversationRepository.findMyBid(pageRequest, user.idx);
        const result = new page_1.Page(totalCount, datas, pageRequest);
        return result;
    }
    async findBookMark(user, pageRequest, category) {
        const [datas, totalCount] = await this.boardBookmarkRepository.findMyBid(pageRequest, user.idx, category);
        const result = new page_1.Page(totalCount, datas, pageRequest);
        return result;
    }
    async getValueAnalysisResultsList(user) {
        const userIdx = user.idx;
        console.log(userIdx);
        const result = this.valueAnalyzerRepository.find({
            where: { userIdx },
            select: ["idx", "petName", "totalScore", "topImg"]
        });
        return result;
    }
    async getValueAnalysisResultDetail(user, idx) {
        const result = this.valueAnalyzerRepository.findOne({
            where: {
                idx
            },
        });
        return result;
    }
};
MypageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [board_repository_1.BoardRepository,
        board_commercial_repository_1.BoardCommercialRepository,
        value_analyzer_repository_1.ValueAnalyzerRepository,
        board_auction_repository_1.BoardAuctionRepository,
        chat_conversation_repository_1.ChatConversationRepository,
        board_bookmark_repository_1.BoardBookmarkRepository,
        typeorm_1.DataSource])
], MypageService);
exports.MypageService = MypageService;
//# sourceMappingURL=mypage.service.js.map