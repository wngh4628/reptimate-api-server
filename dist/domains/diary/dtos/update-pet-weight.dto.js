"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePetWeightDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_pet_weight_dto_1 = require("./create-pet-weight.dto");
class UpdatePetWeightDto extends (0, swagger_1.PartialType)(create_pet_weight_dto_1.CreatePetWeightDto) {
}
exports.UpdatePetWeightDto = UpdatePetWeightDto;
//# sourceMappingURL=update-pet-weight.dto.js.map