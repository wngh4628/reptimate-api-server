"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardAuctionRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_ex_decorator_1 = require("../../../core/decorators/typeorm-ex.decorator");
const board_auction_entity_1 = require("../entities/board-auction.entity");
const board_list_dto_1 = require("../dtos/board-list.dto");
let BoardAuctionRepository = class BoardAuctionRepository extends typeorm_1.Repository {
    async findAndCountByState(pageRequest, state) {
        const [auctions, totalCount] = await this.createQueryBuilder('boardAuction')
            .leftJoinAndSelect('boardAuction.board', 'board')
            .leftJoinAndSelect('board.user', 'user')
            .where('boardAuction.state = :state', { state })
            .orderBy('boardAuction.idx', pageRequest.order)
            .take(pageRequest.limit)
            .skip(pageRequest.offset)
            .getManyAndCount();
        const auctionListDtoArr = await auctions.map((auction) => {
            const boardListDto = board_list_dto_1.BoardListDto.from(auction.board);
            boardListDto.UserInfo = auction.board.user;
            auction.board = null;
            boardListDto.boardAuction = auction;
            return boardListDto;
        });
        return [auctionListDtoArr, totalCount];
    }
};
BoardAuctionRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(board_auction_entity_1.BoardAuction)
], BoardAuctionRepository);
exports.BoardAuctionRepository = BoardAuctionRepository;
//# sourceMappingURL=board-auction.repository.js.map