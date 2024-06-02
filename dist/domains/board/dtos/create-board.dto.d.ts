import { BoardImage } from '../entities/board-image.entity';
export declare class createBoardDto {
    userIdx: number;
    title: string;
    category: string;
    description: string;
    price: number;
    thumbnail: string;
    gender: string;
    size: string;
    variety: string;
    pattern: string;
    startPrice: number;
    unit: number;
    endTime: string;
    alertTime: string;
    extensionRule: number;
    birthDate: string;
    fileUrl: BoardImage[];
}
