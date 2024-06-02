import { PageRequest } from 'src/core/page';
export declare class BoardCategoryPageRequest extends PageRequest {
    orderCriteria?: 'created' | 'view' | 'price';
    category: 'free' | 'ask' | 'market' | 'adoption' | 'adoption' | 'auctionSelling' | 'auctionEnd';
    userIdx?: number;
}
