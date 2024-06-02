"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiOkArrayResponseTemplate = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const page_response_dto_1 = require("./page-response.dto");
const response_dto_1 = require("./response-dto");
const ApiOkArrayResponseTemplate = (params) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(response_dto_1.ResponseDto, page_response_dto_1.PageResponseDto, params.type), (0, swagger_1.ApiOkResponse)({
        description: params.description,
        schema: {
            allOf: [
                { $ref: (0, swagger_1.getSchemaPath)(page_response_dto_1.PageResponseDto) },
                {
                    properties: {
                        result: {
                            properties: {
                                items: {
                                    type: 'array',
                                    items: { $ref: (0, swagger_1.getSchemaPath)(params.type) },
                                    description: '조회된 아이템 목록',
                                },
                            },
                        },
                    },
                },
            ],
        },
    }));
};
exports.ApiOkArrayResponseTemplate = ApiOkArrayResponseTemplate;
//# sourceMappingURL=api-ok-pagination-response-array.js.map