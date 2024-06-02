"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveStreamModule = void 0;
const common_1 = require("@nestjs/common");
const live_stream_controller_1 = require("./live_stream.controller");
const live_stream_service_1 = require("./live_stream.service");
const typeorm_ex_module_1 = require("../../core/typeorm-ex.module");
const live_stream_repository_1 = require("./repositories/live-stream.repository");
const board_auction_repository_1 = require("../board/repositories/board-auction.repository");
let LiveStreamModule = class LiveStreamModule {
};
LiveStreamModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([
                live_stream_repository_1.LiveStreamRepository,
                board_auction_repository_1.BoardAuctionRepository,
            ]),
        ],
        controllers: [live_stream_controller_1.LiveStreamController],
        providers: [live_stream_service_1.LiveStreamService],
    })
], LiveStreamModule);
exports.LiveStreamModule = LiveStreamModule;
//# sourceMappingURL=live_stream.module.js.map