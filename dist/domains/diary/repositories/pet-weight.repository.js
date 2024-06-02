"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetWeightRepository = void 0;
const typeorm_ex_decorator_1 = require("../../../core/decorators/typeorm-ex.decorator");
const typeorm_1 = require("typeorm");
const pet_weight_entity_1 = require("../entities/pet-weight.entity");
let PetWeightRepository = class PetWeightRepository extends typeorm_1.Repository {
    async checkExistDate(petIdx, date) {
        const existDate = await this.exist({
            where: {
                petIdx,
                date,
            },
        });
        return existDate;
    }
    async findAndCountByPetIdx(petIdx, pageRequest) {
        const queryBuilder = this.createQueryBuilder('petWeight').where('petWeight.petIdx = :petIdx', { petIdx });
        switch (pageRequest.filter) {
            case 'week':
                return queryBuilder
                    .andWhere('petWeight.date >= DATE_SUB(NOW(), INTERVAL 7 DAY)')
                    .orderBy('petWeight.date', 'ASC')
                    .getManyAndCount();
            case 'month':
                return queryBuilder
                    .andWhere('petWeight.date >= DATE_SUB(NOW(), INTERVAL 30 DAY)')
                    .orderBy('petWeight.date', 'ASC')
                    .take(30)
                    .getManyAndCount();
            case 'default':
                return queryBuilder
                    .orderBy('petWeight.date', pageRequest.order)
                    .take(pageRequest.limit)
                    .skip(pageRequest.offset)
                    .getManyAndCount();
        }
    }
    getMonthlyAverageInYear(petIdx) {
        const queryBuilder = this.createQueryBuilder('petWeight')
            .where('petWeight.petIdx = :petIdx', { petIdx })
            .select('MONTH(petWeight.date)', 'month')
            .addSelect('AVG(petWeight.weight)', 'average')
            .andWhere('petWeight.date >= DATE_SUB(NOW(), INTERVAL 1 YEAR)')
            .groupBy('MONTH(petWeight.date)')
            .getRawMany();
        return queryBuilder;
    }
};
PetWeightRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(pet_weight_entity_1.PetWeight)
], PetWeightRepository);
exports.PetWeightRepository = PetWeightRepository;
//# sourceMappingURL=pet-weight.repository.js.map