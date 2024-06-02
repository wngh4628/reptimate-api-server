import BaseEntity from 'src/core/entity/base.entity';
export declare class FbToken extends BaseEntity {
    userIdx: number;
    platform: string;
    fbToken: string;
}
