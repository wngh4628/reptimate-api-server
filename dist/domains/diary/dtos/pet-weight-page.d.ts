import { PageRequest } from 'src/core/page';
export declare class PetWeightPageRequest extends PageRequest {
    filter: 'default' | 'week' | 'month' | 'year';
    get limit(): number;
}
