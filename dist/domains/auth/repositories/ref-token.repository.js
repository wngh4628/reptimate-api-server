"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefTokenRepository = void 0;
const typeorm_ex_decorator_1 = require("../../../core/decorators/typeorm-ex.decorator");
const typeorm_1 = require("typeorm");
const ref_token_entity_1 = require("../entities/ref-token.entity");
let RefTokenRepository = class RefTokenRepository extends typeorm_1.Repository {
    async createOrUpdateRefToken(userIdx, platform, refToken) {
        let entity = await this.findOne({
            where: {
                userIdx,
                platform
            },
        });
        if (entity) {
            entity.refToken = refToken;
        }
        else {
            entity = this.create({
                userIdx,
                platform,
                refToken,
            });
        }
        this.save(entity);
    }
};
RefTokenRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(ref_token_entity_1.RefToken)
], RefTokenRepository);
exports.RefTokenRepository = RefTokenRepository;
//# sourceMappingURL=ref-token.repository.js.map