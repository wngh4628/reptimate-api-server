"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardBookmarkRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_ex_decorator_1 = require("../../../core/decorators/typeorm-ex.decorator");
const board_bookmark_entity_1 = require("../entities/board-bookmark.entity");
let BoardBookmarkRepository = class BoardBookmarkRepository extends typeorm_1.Repository {
    async findMyBid(pageRequest, userIdx, category) {
        const [boards, totalCount] = await this.createQueryBuilder('bookmark')
            .leftJoinAndSelect('bookmark.board', 'board')
            .where('bookmark.userIdx = :userIdx', { userIdx: userIdx })
            .andWhere('bookmark.category = :category', { category })
            .orderBy('bookmark.idx', pageRequest.order)
            .take(pageRequest.limit)
            .skip(pageRequest.offset)
            .getManyAndCount();
        return [boards, totalCount];
    }
    async findBookmark(userIdx, boardIdx) {
        const result = await this.createQueryBuilder('bookmark')
            .where('bookmark.user_idx = :userIdx', { userIdx })
            .andWhere('bookmark.post_idx = :boardIdx', { boardIdx })
            .getOne();
        return result;
    }
    async countBookmarks(boardIdx) {
        const count = await this.createQueryBuilder('bookmark')
            .where('bookmark.post_idx = :boardIdx', { boardIdx })
            .getCount();
        return count;
    }
};
BoardBookmarkRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(board_bookmark_entity_1.Bookmark)
], BoardBookmarkRepository);
exports.BoardBookmarkRepository = BoardBookmarkRepository;
//# sourceMappingURL=board-bookmark.repository.js.map