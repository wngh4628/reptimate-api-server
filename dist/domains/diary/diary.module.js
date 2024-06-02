"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiaryModule = void 0;
const diary_repository_1 = require("./repositories/diary.repository");
const pet_repository_1 = require("./repositories/pet.repository");
const typeorm_ex_module_1 = require("../../core/typeorm-ex.module");
const common_1 = require("@nestjs/common");
const diary_service_1 = require("./diary.service");
const diary_controller_1 = require("./diary.controller");
const diary_image_repository_1 = require("./repositories/diary-image.repository");
const pet_weight_repository_1 = require("./repositories/pet-weight.repository");
const user_repository_1 = require("../user/repositories/user.repository");
let DiaryModule = class DiaryModule {
};
DiaryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([
                user_repository_1.UserRepository,
                pet_repository_1.PetRepository,
                diary_repository_1.DiaryRepository,
                diary_image_repository_1.DiaryImageRepository,
                pet_weight_repository_1.PetWeightRepository,
            ]),
        ],
        controllers: [diary_controller_1.DiaryController],
        providers: [diary_service_1.DiaryService],
        exports: [diary_service_1.DiaryService, typeorm_ex_module_1.TypeOrmExModule],
    })
], DiaryModule);
exports.DiaryModule = DiaryModule;
//# sourceMappingURL=diary.module.js.map