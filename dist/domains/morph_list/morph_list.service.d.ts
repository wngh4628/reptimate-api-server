import { MorphListRepository } from './repositories/morph-list.repository';
export declare class MorphListService {
    private morphListRepository;
    constructor(morphListRepository: MorphListRepository);
    getMorphInfo(): Promise<import("./entities/morph-list.entity").MorphList[]>;
}
