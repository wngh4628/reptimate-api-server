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
var LiveStream_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveStream = void 0;
const base_entity_1 = require("../../../core/entity/base.entity");
const typeorm_1 = require("typeorm");
let LiveStream = LiveStream_1 = class LiveStream extends base_entity_1.default {
    static fromDto(dto) {
        const liveStream = new LiveStream_1();
        liveStream.boardIdx = dto.boardIdx;
        liveStream.streamKey = dto.streamKey;
        liveStream.startTime = dto.startTime;
        liveStream.endTime = dto.endTime;
        liveStream.state = dto.state;
        return liveStream;
    }
    updateEndFromDto(dto) {
        this.endTime = dto.endTime;
        this.state = dto.state;
    }
    updateStartFromDto(dto) {
        this.startTime = dto.startTime;
        this.endTime = dto.endTime;
        this.state = dto.state;
    }
};
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], LiveStream.prototype, "boardIdx", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 150,
    }),
    __metadata("design:type", String)
], LiveStream.prototype, "streamKey", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], LiveStream.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], LiveStream.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LiveStream.prototype, "state", void 0);
LiveStream = LiveStream_1 = __decorate([
    (0, typeorm_1.Entity)()
], LiveStream);
exports.LiveStream = LiveStream;
//# sourceMappingURL=live-stream.entity.js.map