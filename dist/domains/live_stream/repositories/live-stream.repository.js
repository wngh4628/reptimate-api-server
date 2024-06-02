"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveStreamRepository = void 0;
const typeorm_ex_decorator_1 = require("../../../core/decorators/typeorm-ex.decorator");
const typeorm_1 = require("typeorm");
const live_stream_entity_1 = require("../entities/live-stream.entity");
const common_1 = require("@nestjs/common");
const http_error_objects_1 = require("../../../core/http/http-error-objects");
let LiveStreamRepository = class LiveStreamRepository extends typeorm_1.Repository {
    checkStreamKeyForm(streamKey) {
        const streamKey_arr = streamKey.split('-');
        if (streamKey_arr.length == 5) {
            for (let i = 0; i < streamKey_arr.length; i++) {
                if (streamKey_arr[i].length != 4) {
                    throw new common_1.UnauthorizedException(http_error_objects_1.HttpErrorConstants.INVALID_AUTH);
                }
            }
        }
        else {
            throw new common_1.UnauthorizedException(http_error_objects_1.HttpErrorConstants.INVALID_AUTH);
        }
        return true;
    }
};
LiveStreamRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(live_stream_entity_1.LiveStream)
], LiveStreamRepository);
exports.LiveStreamRepository = LiveStreamRepository;
//# sourceMappingURL=live-stream.repository.js.map