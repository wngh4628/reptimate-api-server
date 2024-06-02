import { BoardListDto } from './board-list.dto';
declare const BoardDetailDto_base: import("@nestjs/common").Type<Omit<BoardListDto, "thumbnail">>;
export declare class BoardDetailDto extends BoardDetailDto_base {
    imagePaths: string[];
}
export {};
