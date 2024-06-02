import BaseEntity from 'src/core/entity/base.entity';
export declare class ValueAnalyzer extends BaseEntity {
    userIdx: number;
    petName: string;
    morph: string;
    gender: string;
    headScore: number;
    dorsalScore: number;
    tailScore: number;
    leftScore: number;
    rightScore: number;
    leftInfo: string;
    rightInfo: string;
    totalScore: number;
    topImg: string;
    leftImg: string;
    rightImg: string;
}
