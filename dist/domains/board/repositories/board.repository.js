"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_ex_decorator_1 = require("../../../core/decorators/typeorm-ex.decorator");
const board_entity_1 = require("../entities/board.entity");
const board_list_dto_1 = require("../dtos/board-list.dto");
const constant_1 = require("../../user/helper/constant");
let BoardRepository = class BoardRepository extends typeorm_1.Repository {
    async findAndCountByCategory(pageRequest, category, orderCriteria) {
        let orderByField;
        switch (orderCriteria) {
            case constant_1.BoardOrderCriteria.CREATED:
                orderByField = 'board.idx';
                break;
            case constant_1.BoardOrderCriteria.VIEW:
                orderByField = 'board.view';
                break;
            case constant_1.BoardOrderCriteria.PRICE:
                switch (category) {
                    case constant_1.BoardVerifyType.MARKET:
                    case constant_1.BoardVerifyType.ADOPTION:
                        orderByField = 'commercial.price';
                        break;
                    case constant_1.BoardVerifyType.AUCTION:
                        orderByField = 'auction.currentPrice';
                        break;
                }
                break;
        }
        const [boards, totalCount] = await this.createQueryBuilder('board')
            .leftJoinAndSelect('board_auction', 'auction', 'board.idx = auction.boardIdx')
            .leftJoinAndSelect('board_commercial', 'commercial', 'board.idx = commercial.boardIdx')
            .where('board.category = :category', { category })
            .andWhere(category === 'auction' ? 'auction.state <> :state' : '1=1', {
            state: 'temp',
        })
            .orderBy(orderByField, pageRequest.order)
            .take(pageRequest.limit)
            .skip(pageRequest.offset)
            .getManyAndCount();
        const boardListDtoArr = await boards.map((board) => {
            const boardListDto = board_list_dto_1.BoardListDto.from(board);
            return boardListDto;
        });
        return [boardListDtoArr, totalCount];
    }
    async findBoadDetailByBoardIdx(boardIdx) {
        const board = await this.createQueryBuilder('board')
            .leftJoinAndSelect('board.images', 'image')
            .where('board.idx = :boardIdx', { boardIdx })
            .orderBy('image.mediaSequence', 'ASC')
            .getOne();
        const boardListDto = board_list_dto_1.BoardListDto.from(board);
        return boardListDto;
    }
    updateReplyCnt(boardIdx, commentCnt) {
        this.createQueryBuilder()
            .update(board_entity_1.Board)
            .set({ commentCnt })
            .where('board.idx = :boardIdx', { boardIdx })
            .execute();
    }
    async updateViewCount(boardIdx, view) {
        await this.createQueryBuilder()
            .update(board_entity_1.Board)
            .set({ view })
            .where('board.idx = :boardIdx', { boardIdx })
            .execute();
    }
    async findAndCountByCategoryMyPage(pageRequest, userIdx) {
        const [boards, totalCount] = await this.createQueryBuilder('board')
            .leftJoinAndSelect('board.images', 'image')
            .where('board.category <> :category', { category: 'auction' })
            .andWhere('board.userIdx = :userIdx', { userIdx })
            .orderBy('board.idx', pageRequest.order)
            .take(pageRequest.limit)
            .skip(pageRequest.offset)
            .getManyAndCount();
        const boardListDtoArr = await boards.map((board) => {
            const boardListDto = board_list_dto_1.BoardListDto.from(board);
            return boardListDto;
        });
        return [boardListDtoArr, totalCount];
    }
    async findAndCountByAuctionMyPage(pageRequest, userIdx) {
        const [boards, totalCount] = await this.createQueryBuilder('board')
            .leftJoinAndSelect('board.images', 'image')
            .where('board.category = :category', { category: 'auction' })
            .andWhere('board.userIdx = :userIdx', { userIdx })
            .orderBy('board.idx', pageRequest.order)
            .take(pageRequest.limit)
            .skip(pageRequest.offset)
            .getManyAndCount();
        const boardListDtoArr = await boards.map((board) => {
            const boardListDto = board_list_dto_1.BoardListDto.from(board);
            return boardListDto;
        });
        return [boardListDtoArr, totalCount];
    }
    async findAndCountByUserIdx(userIdx, pageRequest) {
        const [boards, totalCount] = await this.createQueryBuilder('board')
            .where('board.userIdx = :userIdx', { userIdx })
            .andWhere('board.category != :category', { category: 'auction' })
            .orderBy('board.idx', pageRequest.order)
            .take(pageRequest.limit)
            .skip(pageRequest.offset)
            .getManyAndCount();
        const boardListDtoArr = await boards.map((board) => {
            const boardListDto = board_list_dto_1.BoardListDto.from(board);
            return boardListDto;
        });
        return [boardListDtoArr, totalCount];
    }
};
BoardRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(board_entity_1.Board)
], BoardRepository);
exports.BoardRepository = BoardRepository;
//# sourceMappingURL=board.repository.js.map