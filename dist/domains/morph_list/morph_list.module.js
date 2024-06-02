"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MorphListModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_ex_module_1 = require("../../core/typeorm-ex.module");
const morph_list_controller_1 = require("./morph_list.controller");
const morph_list_service_1 = require("./morph_list.service");
const morph_list_repository_1 = require("./repositories/morph-list.repository");
let MorphListModule = class MorphListModule {
};
MorphListModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([morph_list_repository_1.MorphListRepository])],
        controllers: [morph_list_controller_1.MorphListController],
        providers: [morph_list_service_1.MorphListService],
    })
], MorphListModule);
exports.MorphListModule = MorphListModule;
//# sourceMappingURL=morph_list.module.js.map