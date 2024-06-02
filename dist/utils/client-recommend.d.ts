import { RedisService } from '@liaoliaots/nestjs-redis';
export declare class ClientRecommend {
    private readonly redisService;
    constructor(redisService: RedisService);
    saveInterest(userIdx: any, category: any): Promise<void>;
    recommendCategory(userIdx: any): Promise<any[]>;
    findRecommendItem(data: any[]): Promise<void>;
}
