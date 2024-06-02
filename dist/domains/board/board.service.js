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
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
const s3_utils_1 = require("../../utils/s3-utils");
const board_repository_1 = require("./repositories/board.repository");
const board_image_entity_1 = require("./entities/board-image.entity");
const board_entity_1 = require("./entities/board.entity");
const page_1 = require("../../core/page");
const http_error_objects_1 = require("../../core/http/http-error-objects");
const update_board_dto_1 = require("./dtos/update-board.dto");
const auth_user_decorator_1 = require("../../core/decorators/auth-user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const board_comment_entity_1 = require("./entities/board-comment.entity");
const board_comment_repository_1 = require("./repositories/board-comment.repository");
const board_image_repository_1 = require("./repositories/board-image.repository");
const board_reply_entity_1 = require("./entities/board-reply.entity");
const board_comment_entity_2 = require("./entities/board-comment.entity");
const board_reply_repository_1 = require("./repositories/board-reply.repository");
const board_bookmark_repository_1 = require("./repositories/board-bookmark.repository");
const board_bookmark_entity_1 = require("./entities/board-bookmark.entity");
const board_commercial_entity_1 = require("./entities/board-commercial.entity");
const board_commercial_repository_1 = require("./repositories/board-commercial.repository");
const user_repository_1 = require("../user/repositories/user.repository");
const fileValitate_1 = require("../../utils/fileValitate");
const typeorm_1 = require("typeorm");
const nestjs_redis_1 = require("@liaoliaots/nestjs-redis");
const board_auction_repository_1 = require("./repositories/board-auction.repository");
const live_stream_repository_1 = require("../live_stream/repositories/live-stream.repository");
const board_auction_entity_1 = require("./entities/board-auction.entity");
const moment = require("moment");
const constant_1 = require("../user/helper/constant");
const client_recommend_1 = require("../../utils/client-recommend");
const elastic_search_1 = require("./providers/elastic-search");
let BoardService = class BoardService {
    constructor(boardRepository, userRepository, boardImageRepository, commentRepository, replyRepository, boardBookmarkRepository, boardCommercialRepository, dataSource, redisService, boardAuctionRepository, liveStreamRepository, clientRecommend, boardElasticSearch) {
        this.boardRepository = boardRepository;
        this.userRepository = userRepository;
        this.boardImageRepository = boardImageRepository;
        this.commentRepository = commentRepository;
        this.replyRepository = replyRepository;
        this.boardBookmarkRepository = boardBookmarkRepository;
        this.boardCommercialRepository = boardCommercialRepository;
        this.dataSource = dataSource;
        this.redisService = redisService;
        this.boardAuctionRepository = boardAuctionRepository;
        this.liveStreamRepository = liveStreamRepository;
        this.clientRecommend = clientRecommend;
        this.boardElasticSearch = boardElasticSearch;
        this.findUserInfo = async (result) => {
            console.log("result!!: ", result);
            const userInfo = await this.userRepository.findOne({
                where: {
                    idx: result.userIdx,
                },
            });
            console.log(userInfo);
            const userDetails = {
                idx: userInfo.idx,
                nickname: userInfo.nickname,
                profilePath: userInfo.profilePath,
            };
            return userDetails;
        };
    }
    async createBoard(dto, userIdx) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            dto.userIdx = userIdx;
            if (dto.fileUrl.length !== 0) {
                if (dto.fileUrl[0].category === 'video') {
                    dto.thumbnail = dto.fileUrl[0].coverImgPath;
                }
                else {
                    dto.thumbnail = dto.fileUrl[0].path;
                }
            }
            else {
                dto.thumbnail = null;
            }
            const board = board_entity_1.Board.from(dto);
            const boardInfo = await queryRunner.manager.save(board);
            if (await this.isCommercialCate(board.category)) {
                const boardCommercial = board_commercial_entity_1.BoardCommercial.from(boardInfo.idx, dto.gender, dto.price, dto.size, dto.variety, dto.pattern, dto.birthDate);
                await queryRunner.manager.save(boardCommercial);
                boardInfo.boardCommercial = boardCommercial;
            }
            if (await this.isAuctionCate(dto.category)) {
                const boardAuction = board_auction_entity_1.BoardAuction.from(boardInfo.idx, dto.price, dto.startPrice, dto.unit, dto.extensionRule, dto.gender, dto.size, dto.variety, dto.pattern, dto.birthDate, 'temp');
                boardAuction.extensionTime = dto.endTime;
                boardAuction.endTime = moment(dto.endTime)
                    .add(1, 'minute')
                    .format('YYYY-MM-DD HH:mm');
                if (dto.alertTime !== 'noAlert') {
                    boardAuction.alertTime = moment(dto.endTime)
                        .subtract(dto.alertTime, 'minute')
                        .format('YYYY-MM-DD HH:mm');
                }
                await queryRunner.manager.save(boardAuction);
                boardInfo.boardAuction = boardAuction;
            }
            if (dto.fileUrl) {
                const mediaInfo = [];
                for (let i = 0; i < dto.fileUrl.length; i++) {
                    const fileData = dto.fileUrl[i];
                    fileData.boardIdx = boardInfo.idx;
                    fileData.mediaSequence = i;
                    mediaInfo.push(fileData);
                }
                await queryRunner.manager.save(board_image_entity_1.BoardImage, mediaInfo);
            }
            this.boardElasticSearch.insertBoard(boardInfo, boardInfo.boardCommercial, boardInfo.boardAuction);
            await queryRunner.commitTransaction();
            return boardInfo;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async findAllBoard(pageRequest) {
        const category = pageRequest.category;
        const orderCriteria = pageRequest.orderCriteria;
        if (!['market', 'adoption'].includes(category) &&
            orderCriteria === constant_1.BoardOrderCriteria.PRICE) {
            throw new common_1.UnprocessableEntityException(http_error_objects_1.HttpErrorConstants.PRICE_NOT_SPECIFIED);
        }
        const [boards, totalCount] = await this.boardRepository.findAndCountByCategory(pageRequest, category, orderCriteria);
        const result = new page_1.Page(totalCount, boards, pageRequest);
        console.log("result: ", result);
        const usersInfoArr = [];
        for (const board of result.items) {
            const userDetails = await this.findUserInfo(board);
            board.UserInfo = userDetails;
            usersInfoArr.push(board);
        }
        result.items = usersInfoArr;
        switch (pageRequest.category) {
            case constant_1.BoardVerifyType.MARKET:
            case constant_1.BoardVerifyType.ADOPTION:
                const commercialInfoArr = [];
                for (const board of result.items) {
                    const commercialInfo = await this.boardCommercialRepository.findOne({
                        where: {
                            boardIdx: board.idx,
                        },
                    });
                    board.boardCommercial = commercialInfo;
                    commercialInfoArr.push(board);
                }
                result.items = commercialInfoArr;
                return result;
            default:
                return result;
        }
    }
    async findAuction(pageRequest) {
        let state = '';
        if (pageRequest.category.includes('auctionSelling')) {
            state = 'selling';
        }
        else {
            state = 'end';
        }
        const [auction, totalCount] = await this.boardAuctionRepository.findAndCountByState(pageRequest, state);
        const result = new page_1.Page(totalCount, auction, pageRequest);
        return result;
    }
    async findBoard(boardIdx, userIdx) {
        const board = await this.boardRepository.findBoadDetailByBoardIdx(boardIdx);
        if (!board) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_BOARD);
        }
        else if (board.status === 'PRIVATE') {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.BOARD_PRIVATE);
        }
        if (userIdx !== null || userIdx !== undefined) {
            const key = `boardview${boardIdx}`;
            const redis = this.redisService.getClient();
            const setMembers = await redis.smembers(key);
            if (!setMembers.includes(userIdx.toString())) {
                await redis.sadd(key, userIdx);
                if (setMembers.length === 0) {
                    const currentTimestamp = Math.floor(Date.now() / 1000);
                    const endOfDayTimestamp = Math.floor(new Date().setHours(23, 59, 59, 999) / 1000);
                    const ttl = endOfDayTimestamp - currentTimestamp;
                    await redis.expire(key, ttl);
                }
                const viewCnt = board.view + 1;
                board.view = viewCnt;
                await this.boardRepository
                    .createQueryBuilder('board')
                    .update(board_entity_1.Board)
                    .set({ view: viewCnt })
                    .where('board.idx = :boardIdx', { boardIdx: boardIdx })
                    .execute();
            }
            const bookmark = await this.boardBookmarkRepository.findBookmark(userIdx, boardIdx);
            if (bookmark) {
                board.hasBookmarked = true;
            }
            else {
                board.hasBookmarked = false;
            }
        }
        const bookmarkCounts = await this.boardBookmarkRepository.countBookmarks(boardIdx);
        board.bookmarkCounts = bookmarkCounts;
        const userDetails = await this.findUserInfo(board);
        board.UserInfo = userDetails;
        switch (board.category) {
            case constant_1.BoardVerifyType.MARKET:
            case constant_1.BoardVerifyType.ADOPTION:
                const boardCommercial = await this.boardCommercialRepository.findOne({
                    where: {
                        boardIdx: boardIdx,
                    },
                });
                board.boardCommercial = boardCommercial;
                if (userIdx !== null || userIdx !== undefined) {
                    this.clientRecommend.saveInterest(userIdx, board.boardCommercial.pattern);
                }
                return board;
            case constant_1.BoardVerifyType.AUCTION:
                const boardAuction = await this.boardAuctionRepository.findOne({
                    where: {
                        boardIdx: boardIdx,
                    },
                });
                board.boardAuction = boardAuction;
                const liveStream = await this.liveStreamRepository.findOne({
                    where: {
                        boardIdx: boardIdx,
                    },
                });
                board.liveStream = liveStream;
                if (userIdx !== null || userIdx !== undefined) {
                    this.clientRecommend.saveInterest(userIdx, board.boardAuction.pattern);
                }
                return board;
            default:
                return board;
        }
    }
    async removeBoard(boardIdx, userIdx) {
        const queryRunner = this.dataSource.createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const board = await this.boardRepository.findOne({
                where: {
                    idx: boardIdx,
                },
                relations: ['images'],
            });
            if (!board) {
                throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_BOARD);
            }
            else if (board.userIdx != userIdx) {
                throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.BOARD_NOT_WRITER);
            }
            const boardComments = await this.commentRepository.find({
                where: { boardIdx: board.idx },
            });
            if (boardComments.length > 0) {
                for (const boardComment of boardComments) {
                    boardComment.boardState = 'deleted';
                }
                await this.commentRepository.save(boardComments);
            }
            const boardReplys = await this.replyRepository.find({
                where: { boardIdx: board.idx },
            });
            if (boardReplys.length > 0) {
                for (const boardReply of boardReplys) {
                    boardReply.boardState = 'deleted';
                }
                await this.replyRepository.save(boardReplys);
            }
            if (await this.isCommercialCate(board.category)) {
                await queryRunner.manager.softDelete(board_commercial_entity_1.BoardCommercial, {
                    boardIdx: boardIdx,
                });
            }
            if (await this.isAuctionCate(board.category)) {
                await queryRunner.manager.softDelete(board_auction_entity_1.BoardAuction, {
                    boardIdx: boardIdx,
                });
            }
            if (board.images) {
                for (const image of board.images) {
                    await queryRunner.manager.softRemove(board_image_entity_1.BoardImage, image);
                }
            }
            await queryRunner.manager.softDelete(board_entity_1.Board, boardIdx);
            await this.boardElasticSearch.deleteBoard(boardIdx);
            await queryRunner.commitTransaction();
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async deleteBoardImages(images) {
        for (const image of images) {
            this.boardImageRepository.softRemove(image);
        }
    }
    async updateBoard(boardIdx, dto, user) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            let boardCommercial;
            let boardAuction;
            const board = await this.boardRepository.findOne({
                where: {
                    idx: boardIdx,
                },
                relations: ['images'],
            });
            if (!board) {
                throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_BOARD);
            }
            if (await this.isCommercialCate(board.category)) {
                boardCommercial = board_commercial_entity_1.BoardCommercial.updateFrom(dto.boardCommercialIdx, boardIdx, dto.gender, dto.price, dto.size, dto.variety, dto.pattern, dto.birthDate, dto.state);
                await queryRunner.manager.save(boardCommercial);
            }
            if (await this.isAuctionCate(dto.category)) {
                const auctionInfo = await queryRunner.manager.findOneBy(board_auction_entity_1.BoardAuction, {
                    idx: dto.auctionIdx,
                });
                boardAuction = board_auction_entity_1.BoardAuction.updateForm(auctionInfo.idx, board.idx, dto.price, dto.startPrice, dto.unit, dto.extensionRule, dto.gender, dto.size, dto.variety, dto.pattern, dto.birthDate, dto.state, dto.streamKey);
                boardAuction.extensionTime = dto.endTime;
                boardAuction.endTime = moment(dto.endTime)
                    .add(1, 'minute')
                    .format('YYYY-MM-DD HH:mm');
                if (dto.alertTime !== 'noAlert') {
                    boardAuction.alertTime = moment(dto.endTime)
                        .subtract(dto.alertTime, 'minute')
                        .format('YYYY-MM-DD HH:mm');
                }
                await queryRunner.manager.save(boardAuction);
            }
            const firstImgData = await queryRunner.manager.findOneBy(board_image_entity_1.BoardImage, {
                boardIdx: boardIdx,
                mediaSequence: 0,
            });
            if (firstImgData !== null) {
            }
            const thumbnailUrl = firstImgData !== null
                ? firstImgData.category === 'video'
                    ? firstImgData.coverImgPath
                    : firstImgData.path
                : null;
            const boardInfo = board_entity_1.Board.updateFrom(user.idx, dto.category, boardIdx, dto.title, dto.description, thumbnailUrl);
            await queryRunner.manager.save(boardInfo);
            const returnBoard = await this.boardRepository.findOne({
                where: {
                    idx: boardIdx,
                },
                relations: ['images'],
            });
            await this.boardElasticSearch.updateBoard(boardIdx, boardInfo, boardCommercial, boardAuction);
            await queryRunner.commitTransaction();
            return returnBoard;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async updateStreamKey(boardAuctionIdx, dto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const boardAuction = await this.boardAuctionRepository.findOne({
                where: {
                    idx: boardAuctionIdx,
                },
            });
            if (!boardAuction) {
                throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_AUCTION_BOARD);
            }
            boardAuction.streamKey = dto.streamKey;
            const updatedBoardAuction = await queryRunner.manager.save(boardAuction);
            await queryRunner.commitTransaction();
            return updatedBoardAuction.streamKey;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async createComment(dto, userIdx, file) {
        (0, fileValitate_1.fileValidate)(file);
        const queryRunner = this.dataSource.createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            let commentInfo;
            if (dto.category === constant_1.BoardVerifyType.COMMENT) {
                const comment = board_comment_entity_1.default.from(dto);
                comment.userIdx = userIdx;
                if (file) {
                    const url = await (0, s3_utils_1.mediaUpload)(file, s3_utils_1.S3FolderName.REPLY);
                    comment.filePath = url;
                }
                commentInfo = await queryRunner.manager.save(comment);
            }
            else if (dto.category === constant_1.BoardVerifyType.REPLY) {
                const reply = board_reply_entity_1.default.from(dto);
                reply.userIdx = userIdx;
                if (file) {
                    const url = await (0, s3_utils_1.mediaUpload)(file, s3_utils_1.S3FolderName.REPLY);
                    reply.filePath = url;
                }
                commentInfo = await queryRunner.manager.save(reply);
                const count = await this.countComment('reply', dto.commentIdx, queryRunner);
                await this.commentRepository.updateReplyCnt(dto.commentIdx, count);
            }
            const count = await this.countComment('all', dto.boardIdx, queryRunner);
            this.boardRepository.updateReplyCnt(dto.boardIdx, count);
            await queryRunner.commitTransaction();
            return commentInfo;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async removeComment(commentIdx, boardIdx, userIdx, category) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            if (category === 'comment') {
                const comment = await this.commentRepository.findOne({
                    where: {
                        idx: commentIdx,
                    },
                });
                if (!comment) {
                    throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_REPLY);
                }
                if (comment.userIdx != userIdx) {
                    throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.REPLY_NOT_WRITER);
                }
                await queryRunner.manager.softDelete(board_comment_entity_2.default, commentIdx);
            }
            else if (category === 'reply') {
                const rerelpy = await this.replyRepository.findOne({
                    where: {
                        idx: commentIdx,
                    },
                });
                if (!rerelpy) {
                    throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_REPLY);
                }
                else if (rerelpy.userIdx != userIdx) {
                    throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.REPLY_NOT_WRITER);
                }
                await queryRunner.manager.softDelete(board_reply_entity_1.default, commentIdx);
            }
            const count = await this.countComment('all', boardIdx, queryRunner);
            await this.boardRepository.updateReplyCnt(boardIdx, count);
            await queryRunner.commitTransaction();
            return count;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async countComment(table, boardIdx, queryRunner) {
        if (table === 'comment') {
            const replyCnt = await queryRunner.manager.count(board_comment_entity_2.default, {
                where: {
                    boardIdx: boardIdx,
                },
            });
            return replyCnt;
        }
        else if (table === 'reply') {
            const replyCnt = await queryRunner.manager.count(board_reply_entity_1.default, {
                where: {
                    commentIdx: boardIdx,
                },
            });
            return replyCnt;
        }
        else if (table === 'all') {
            const commentCnt = await queryRunner.manager.count(board_comment_entity_2.default, {
                where: {
                    boardIdx: boardIdx,
                },
            });
            const replyCnt = await queryRunner.manager.count(board_reply_entity_1.default, {
                where: {
                    boardIdx: boardIdx,
                },
            });
            const result = replyCnt + commentCnt;
            return result;
        }
    }
    async findBoardComment(pageRequest, boardIdx, category) {
        if (category === 'comment') {
            const [comments, totalCount] = await this.commentRepository.findAndCountByBoardIdx(pageRequest, boardIdx);
            const result = new page_1.Page(totalCount, comments, pageRequest);
            const commentData = [];
            for (const reply of result.items) {
                const userDetails = await this.findUserInfo(reply);
                reply.UserInfo = userDetails;
                commentData.push(reply);
            }
            result.items = commentData;
            return result;
        }
        else if (category === 'reply') {
            const [replys, totalCount] = await this.replyRepository.findAndCountByBoardIdx(pageRequest, boardIdx);
            const result = new page_1.Page(totalCount, replys, pageRequest);
            const commentData = [];
            for (const reply of result.items) {
                const userDetails = await this.findUserInfo(reply);
                reply.UserInfo = userDetails;
                commentData.push(reply);
            }
            result.items = commentData;
            return result;
        }
    }
    async updateComment(dto, commentIdx, userIdx, file) {
        (0, fileValitate_1.fileValidate)(file);
        if (dto.category === constant_1.BoardVerifyType.COMMENT) {
            const comment = await this.commentRepository.findOne({
                where: {
                    idx: commentIdx,
                },
            });
            if (!comment) {
                throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_REPLY);
            }
            else if (comment.userIdx != userIdx) {
                throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.REPLY_NOT_WRITER);
            }
            comment.description = dto.description;
            if (file) {
                const url = await (0, s3_utils_1.mediaUpload)(file, s3_utils_1.S3FolderName.REPLY);
                comment.filePath = url;
            }
            const commentInfo = await this.commentRepository.save(comment);
            return commentInfo;
        }
        else if (dto.category === constant_1.BoardVerifyType.REPLY) {
            const reply = await this.replyRepository.findOne({
                where: {
                    idx: commentIdx,
                },
            });
            if (!reply) {
                throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_REPLY);
            }
            else if (reply.userIdx != userIdx) {
                throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.REPLY_NOT_WRITER);
            }
            reply.description = dto.description;
            if (file) {
                const url = await (0, s3_utils_1.mediaUpload)(file, s3_utils_1.S3FolderName.REPLY);
                reply.filePath = url;
            }
            const replyInfo = await this.replyRepository.save(reply);
            return replyInfo;
        }
    }
    async RegisterBoardBookmark(boardIdx, userIdx, category) {
        const board = await this.boardRepository.findOne({
            where: {
                idx: boardIdx,
            },
        });
        if (!board) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.CANNOT_FIND_BOARD);
        }
        const bookmark = new board_bookmark_entity_1.Bookmark();
        bookmark.category = category;
        bookmark.userIdx = userIdx;
        bookmark.postIdx = boardIdx;
        const bookmarkCheck = await this.boardBookmarkRepository.findOne({
            where: {
                category: category,
                postIdx: boardIdx,
                userIdx: userIdx,
            },
        });
        if (bookmarkCheck) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.BOOKMAEK_EXIST);
        }
        const result = await this.boardBookmarkRepository.save(bookmark);
        return result;
    }
    async boardBookmarkRemove(boardIdx, userIdx) {
        const bookmarkCheck = await this.boardBookmarkRepository.findOne({
            where: {
                postIdx: boardIdx,
                userIdx: userIdx,
            },
        });
        if (!bookmarkCheck) {
            throw new common_1.NotFoundException(http_error_objects_1.HttpErrorConstants.BOOKMAEK_NOT_EXIST);
        }
        const result = await this.boardBookmarkRepository.softDelete(bookmarkCheck.idx);
        return result;
    }
    async isCommercialCate(category) {
        if (category === constant_1.BoardVerifyType.ADOPTION ||
            category === constant_1.BoardVerifyType.MARKET) {
            return true;
        }
        else {
            return false;
        }
    }
    async isAuctionCate(category) {
        if (category === constant_1.BoardVerifyType.AUCTION) {
            return true;
        }
        else {
            return false;
        }
    }
    async findRecommendItem(userIdx) {
        let result = null;
        const recommend = await this.clientRecommend.recommendCategory(userIdx);
        const recommendItem = recommend[0].recommendItem;
        if (recommendItem.length !== 0) {
            const resultItem = [];
            for (const item of recommendItem) {
                const result = await this.boardCommercialRepository.findRecommendItem(item.category, item.recommendCnt);
                resultItem.push(result);
            }
            const itemsCnt = resultItem.reduce((count, subArray) => count + subArray.length, 0);
            if (itemsCnt < 4) {
                const extraItemsCnt = 5 - itemsCnt;
                const resultdata = await this.boardCommercialRepository.findExtraItems(extraItemsCnt);
                resultItem.push(resultdata);
            }
            result = resultItem.flatMap((group) => group.map((boardCommercial) => ({
                boardCommercialIdx: boardCommercial.idx,
                createdAt: boardCommercial.createdAt,
                updatedAt: boardCommercial.updatedAt,
                deletedAt: boardCommercial.deletedAt,
                boardIdx: boardCommercial.boardIdx,
                price: boardCommercial.price,
                gender: boardCommercial.gender,
                size: boardCommercial.size,
                variety: boardCommercial.variety,
                state: boardCommercial.state,
                pattern: boardCommercial.pattern,
                birthDate: boardCommercial.birthDate,
                board: boardCommercial.board,
                user: boardCommercial.user,
            })));
        }
        return result;
    }
    async searchTotal(keyword) {
        return this.boardElasticSearch.searchTotal(keyword);
    }
    async searchCategory(keyword, pageRequest) {
        return this.boardElasticSearch.searchCategory(keyword, pageRequest);
    }
};
__decorate([
    __param(2, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_board_dto_1.UpdateBoardDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], BoardService.prototype, "updateBoard", null);
BoardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [board_repository_1.BoardRepository,
        user_repository_1.UserRepository,
        board_image_repository_1.BoardImageRepository,
        board_comment_repository_1.BoardCommentRepository,
        board_reply_repository_1.BoardReplyRepository,
        board_bookmark_repository_1.BoardBookmarkRepository,
        board_commercial_repository_1.BoardCommercialRepository,
        typeorm_1.DataSource,
        nestjs_redis_1.RedisService,
        board_auction_repository_1.BoardAuctionRepository,
        live_stream_repository_1.LiveStreamRepository,
        client_recommend_1.ClientRecommend,
        elastic_search_1.BoardElasticSearch])
], BoardService);
exports.BoardService = BoardService;
//# sourceMappingURL=board.service.js.map