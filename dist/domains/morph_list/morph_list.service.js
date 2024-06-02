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
exports.MorphListService = void 0;
const common_1 = require("@nestjs/common");
const morph_list_repository_1 = require("./repositories/morph-list.repository");
let MorphListService = class MorphListService {
    constructor(morphListRepository) {
        this.morphListRepository = morphListRepository;
    }
    async getMorphInfo() {
        const result = await this.morphListRepository.find({
            select: {
                category: true,
                name: true,
            },
        });
        return result;
    }
};
MorphListService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [morph_list_repository_1.MorphListRepository])
], MorphListService);
exports.MorphListService = MorphListService;
//# sourceMappingURL=morph_list.service.js.map