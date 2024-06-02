import { createBoardDto } from './create-board.dto';
declare const UpdateBoardDto_base: import("@nestjs/common").Type<Partial<createBoardDto>>;
export declare class UpdateBoardDto extends UpdateBoardDto_base {
    boardCommercialIdx: number;
    price: number;
    gender: string;
    size: string;
    variety: string;
    pattern: string;
    birthDate: string;
    auctionIdx: number;
    state: string;
    streamKey: string;
}
export {};
