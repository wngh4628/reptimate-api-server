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
exports.LiveStreamService = void 0;
const common_1 = require("@nestjs/common");
const http_error_objects_1 = require("../../core/http/http-error-objects");
const live_stream_entity_1 = require("./entities/live-stream.entity");
const live_stream_repository_1 = require("./repositories/live-stream.repository");
const board_auction_repository_1 = require("../board/repositories/board-auction.repository");
let LiveStreamService = class LiveStreamService {
    constructor(liveStreamRepository, boardAuctionRepository) {
        this.liveStreamRepository = liveStreamRepository;
        this.boardAuctionRepository = boardAuctionRepository;
    }
    async setLiveStreamInfo(val, dto) {
        const stream_from_chk = this.liveStreamRepository.checkStreamKeyForm(dto.name);
        if (stream_from_chk) {
            const auctionInfo = await this.boardAuctionRepository.findOne({
                where: {
                    streamKey: dto.name,
                },
            });
            if (auctionInfo) {
                const liveInfo = await this.liveStreamRepository.findOne({
                    where: {
                        streamKey: dto.name,
                    },
                });
                if (val == 'start') {
                    if (liveInfo) {
                        const liveStreamData = {
                            startTime: new Date(),
                            endTime: null,
                            state: 1,
                        };
                        liveInfo.updateStartFromDto(liveStreamData);
                        const result = await this.liveStreamRepository.save(liveInfo);
                        return result;
                    }
                    else {
                        const liveStreamData = {
                            boardIdx: auctionInfo.boardIdx,
                            streamKey: auctionInfo.streamKey,
                            startTime: new Date(),
                            endTime: null,
                            state: 1,
                        };
                        const LiveStreamInfo = live_stream_entity_1.LiveStream.fromDto(liveStreamData);
                        const result = await this.liveStreamRepository.save(LiveStreamInfo);
                        return result;
                    }
                }
                else {
                    if (liveInfo) {
                        const liveStreamData = {
                            endTime: new Date(),
                            state: 0,
                        };
                        liveInfo.updateEndFromDto(liveStreamData);
                        const result = await this.liveStreamRepository.save(liveInfo);
                        return result;
                    }
                }
            }
            else {
                throw new common_1.UnauthorizedException(http_error_objects_1.HttpErrorConstants.LIVESTREAMINFO_NOT_EXIST);
            }
        }
        else {
            throw new common_1.UnauthorizedException(http_error_objects_1.HttpErrorConstants.LIVESTREAMINFO_NOT_EXIST);
        }
    }
};
LiveStreamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [live_stream_repository_1.LiveStreamRepository,
        board_auction_repository_1.BoardAuctionRepository])
], LiveStreamService);
exports.LiveStreamService = LiveStreamService;
//# sourceMappingURL=live_stream.service.js.map