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
exports.ClientRecommend = void 0;
const nestjs_redis_1 = require("@liaoliaots/nestjs-redis");
const common_1 = require("@nestjs/common");
let ClientRecommend = class ClientRecommend {
    constructor(redisService) {
        this.redisService = redisService;
    }
    async saveInterest(userIdx, category) {
        const redis = this.redisService.getClient();
        const userCategory = await redis.get(`saveInterest${userIdx}`);
        const userCateInfo = userCategory ? JSON.parse(userCategory) : {};
        if (userCateInfo[category]) {
            userCateInfo[category] += 1;
        }
        else {
            userCateInfo[category] = 1;
        }
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const endOfDayTimestamp = Math.floor(new Date().setHours(23, 59, 59, 999) / 1000);
        const ttl = endOfDayTimestamp - currentTimestamp;
        await redis.set(`saveInterest${userIdx}`, JSON.stringify(userCateInfo));
        await redis.expire(`saveInterest${userIdx}`, ttl);
    }
    async recommendCategory(userIdx) {
        const result = [];
        const redis = this.redisService.getClient();
        const userCategory = await redis.get(`saveInterest${userIdx}`);
        const userCateInfo = userCategory ? JSON.parse(userCategory) : {};
        console.log('userCateInfo: ', userCateInfo);
        const totalValue = Object.values(userCateInfo).reduce((acc, val) => acc + val, 0);
        const sortedCategories = Object.keys(userCateInfo).sort((a, b) => userCateInfo[b] - userCateInfo[a]);
        const recommendItem = [];
        if (totalValue > 0) {
            console.log('totalValue: ', totalValue);
            console.log('sortedCategories: ', sortedCategories);
            let leftRecommend = 5;
            for (const category of sortedCategories) {
                const categoryValue = userCateInfo[category];
                const percentage = categoryValue / totalValue;
                const recommendCnt = Math.ceil(5 * percentage);
                recommendItem.push({ category, recommendCnt });
                leftRecommend -= recommendCnt;
                if (leftRecommend === 0) {
                    break;
                }
                else if (leftRecommend < 0) {
                    leftRecommend = leftRecommend + recommendCnt;
                    break;
                }
            }
        }
        result.push({ recommendItem, sortedCategories });
        console.log('result: ', result);
        await this.findRecommendItem(result);
        return result;
    }
    async findRecommendItem(data) {
        const recommendItem = data[0].recommendItem;
        for (const item of recommendItem) {
        }
    }
};
ClientRecommend = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_redis_1.RedisService])
], ClientRecommend);
exports.ClientRecommend = ClientRecommend;
//# sourceMappingURL=client-recommend.js.map