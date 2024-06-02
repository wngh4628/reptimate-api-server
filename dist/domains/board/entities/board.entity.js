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
var Board_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const base_entity_1 = require("../../../core/entity/base.entity");
const typeorm_1 = require("typeorm");
const board_status_enum_1 = require("../board-status.enum");
const board_image_entity_1 = require("./board-image.entity");
const board_bookmark_entity_1 = require("./board-bookmark.entity");
const chat_conversation_entity_1 = require("../../mypage/entities/chat-conversation.entity");
const board_commercial_entity_1 = require("./board-commercial.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const board_auction_entity_1 = require("./board-auction.entity");
let Board = Board_1 = class Board extends base_entity_1.default {
    static from({ userIdx, title, category, description, thumbnail, }) {
        const board = new Board_1();
        board.userIdx = userIdx;
        board.title = title;
        board.category = category;
        board.description = description;
        board.thumbnail = thumbnail;
        return board;
    }
    static updateFrom(userIdx, category, idx, title, description, thumbnail) {
        const board = new Board_1();
        board.idx = idx;
        board.userIdx = userIdx;
        board.title = title;
        board.category = category;
        board.description = description;
        board.thumbnail = thumbnail;
        return board;
    }
    updateFromDto(dto) {
        this.title = dto.title;
        this.description = dto.description;
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Board.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Board.prototype, "userIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Board.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Board.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Board.prototype, "media", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Board.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Board.prototype, "view", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Board.prototype, "commentCnt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Board.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => board_image_entity_1.BoardImage, (image) => image.board),
    __metadata("design:type", Array)
], Board.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_idx', referencedColumnName: 'idx' }),
    __metadata("design:type", user_entity_1.User)
], Board.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => board_bookmark_entity_1.Bookmark),
    (0, typeorm_1.JoinColumn)({ name: 'idx', referencedColumnName: 'postIdx' }),
    __metadata("design:type", board_bookmark_entity_1.Bookmark)
], Board.prototype, "bookmark", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => chat_conversation_entity_1.ChatConversation),
    (0, typeorm_1.JoinColumn)({ name: 'idx', referencedColumnName: 'roomIdx' }),
    __metadata("design:type", chat_conversation_entity_1.ChatConversation)
], Board.prototype, "chatConversation", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => board_commercial_entity_1.BoardCommercial),
    (0, typeorm_1.JoinColumn)({ name: 'idx', referencedColumnName: 'boardIdx' }),
    __metadata("design:type", board_commercial_entity_1.BoardCommercial)
], Board.prototype, "boardCommercial", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => board_auction_entity_1.BoardAuction),
    (0, typeorm_1.JoinColumn)({ name: 'idx', referencedColumnName: 'boardIdx' }),
    __metadata("design:type", board_auction_entity_1.BoardAuction)
], Board.prototype, "boardAuction", void 0);
Board = Board_1 = __decorate([
    (0, typeorm_1.Entity)()
], Board);
exports.Board = Board;
//# sourceMappingURL=board.entity.js.map