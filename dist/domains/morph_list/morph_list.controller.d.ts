/// <reference types="express" />
import { MorphListService } from './morph_list.service';
export declare class MorphListController {
    private morphListService;
    constructor(morphListService: MorphListService);
    getMorph(res: any): Promise<import("express").Response<unknown, Record<string, any>>>;
}
