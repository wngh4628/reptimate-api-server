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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleController = void 0;
const schedule_list_dto_1 = require("./dtos/schedule-list.dto");
const swagger_tags_1 = require("../../core/swagger/swagger-tags");
const common_1 = require("@nestjs/common");
const schedule_service_1 = require("./schedule.service");
const create_schedule_dto_1 = require("./dtos/create-schedule.dto");
const update_schedule_dto_1 = require("./dtos/update-schedule.dto");
const swagger_1 = require("@nestjs/swagger");
const api_created_response_1 = require("../../core/swagger/api-created-response");
const apt_error_response_1 = require("../../core/swagger/apt-error-response");
const http_status_codes_1 = require("http-status-codes");
const http_error_objects_1 = require("../../core/http/http-error-objects");
const http_response_1 = require("../../core/http/http-response");
const auth_user_decorator_1 = require("../../core/decorators/auth-user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const use_auth_1 = require("../auth/auth-guards/use-auth");
const api_error_common_response_1 = require("../../core/swagger/api-error-common-response");
const api_ok_pagination_response_1 = require("../../core/swagger/api-ok-pagination-response");
const page_1 = require("../../core/page");
const api_ok_response_1 = require("../../core/swagger/api-ok-response");
let ScheduleController = class ScheduleController {
    constructor(scheduleService) {
        this.scheduleService = scheduleService;
    }
    async create(res, dto, user) {
        const result = await this.scheduleService.create(dto, user.idx);
        return http_response_1.default.created(res, { body: result });
    }
    async findRepeatSchedules(res, user, pageRequest) {
        const result = await this.scheduleService.findRepeatSchedules(user.idx, pageRequest);
        return http_response_1.default.ok(res, result);
    }
    async findCalendarSchedules(res, user, date) {
        const result = await this.scheduleService.findScheduleByDate(user.idx, date);
        return http_response_1.default.ok(res, result);
    }
    async update(res, scheduleIdx, dto) {
        const result = await this.scheduleService.update(scheduleIdx, dto);
        return http_response_1.default.ok(res, result);
    }
    async remove(res, scheduleIdx) {
        await this.scheduleService.remove(scheduleIdx);
        return http_response_1.default.ok(res);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '스케줄 생성',
        description: '스케줄을 생성한다.',
    }),
    (0, swagger_1.ApiBody)({ type: create_schedule_dto_1.CreateScheduleDto }),
    (0, api_created_response_1.ApiCreatedResponseTemplate)({ type: create_schedule_dto_1.CreateScheduleDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_USER],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_schedule_dto_1.CreateScheduleDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '반복 스케줄 목록 조회',
        description: '반복 스케줄 목록을 조회한다.',
    }),
    (0, api_ok_pagination_response_1.ApiOkPaginationResponseTemplate)({ type: schedule_list_dto_1.ScheduleListDto }),
    (0, use_auth_1.default)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User,
        page_1.PageRequest]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "findRepeatSchedules", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '달력 스케줄 조회',
        description: '해당 월의 달력 스케줄 전체를 조회한다.',
    }),
    (0, api_ok_pagination_response_1.ApiOkPaginationResponseTemplate)({ type: schedule_list_dto_1.ScheduleListDto }),
    (0, use_auth_1.default)(),
    (0, common_1.Get)('/:date'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __param(2, (0, common_1.Param)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "findCalendarSchedules", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '스케줄 수정',
        description: '스케줄 정보를 수정한다.',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)({ type: update_schedule_dto_1.UpdateScheduleDto }),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_SCHEDULE],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Patch)('/:scheduleIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('scheduleIdx')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_schedule_dto_1.UpdateScheduleDto]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '스케줄 삭제',
        description: '스케줄을 삭제한다. ',
    }),
    (0, api_ok_response_1.ApiOkResponseTemplate)(),
    (0, apt_error_response_1.ApiErrorResponseTemplate)([
        {
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            errorFormatList: [http_error_objects_1.HttpErrorConstants.CANNOT_FIND_SCHEDULE],
        },
    ]),
    (0, use_auth_1.default)(),
    (0, common_1.Delete)('/:scheduleIdx'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('scheduleIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "remove", null);
ScheduleController = __decorate([
    (0, swagger_1.ApiTags)(swagger_tags_1.SwaggerTag.SCHEDULE),
    (0, api_error_common_response_1.ApiCommonErrorResponseTemplate)(),
    (0, common_1.Controller)('/schedules'),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService])
], ScheduleController);
exports.ScheduleController = ScheduleController;
//# sourceMappingURL=schedule.controller.js.map