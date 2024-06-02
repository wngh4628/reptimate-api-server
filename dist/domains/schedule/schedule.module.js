"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerModule = void 0;
const user_repository_1 = require("../user/repositories/user.repository");
const schedule_repository_1 = require("./repositories/schedule.repository");
const common_1 = require("@nestjs/common");
const schedule_service_1 = require("./schedule.service");
const schedule_controller_1 = require("./schedule.controller");
const typeorm_ex_module_1 = require("../../core/typeorm-ex.module");
let SchedulerModule = class SchedulerModule {
};
SchedulerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([schedule_repository_1.ScheduleRepository, user_repository_1.UserRepository]),
        ],
        controllers: [schedule_controller_1.ScheduleController],
        providers: [schedule_service_1.ScheduleService],
        exports: [typeorm_ex_module_1.TypeOrmExModule],
    })
], SchedulerModule);
exports.SchedulerModule = SchedulerModule;
//# sourceMappingURL=schedule.module.js.map