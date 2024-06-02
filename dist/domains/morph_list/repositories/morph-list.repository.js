"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MorphListRepository = void 0;
const typeorm_ex_decorator_1 = require("../../../core/decorators/typeorm-ex.decorator");
const typeorm_1 = require("typeorm");
const morph_list_entity_1 = require("../entities/morph-list.entity");
let MorphListRepository = class MorphListRepository extends typeorm_1.Repository {
};
MorphListRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(morph_list_entity_1.MorphList)
], MorphListRepository);
exports.MorphListRepository = MorphListRepository;
//# sourceMappingURL=morph-list.repository.js.map