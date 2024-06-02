import { Repository } from 'typeorm';
import { RefToken } from '../entities/ref-token.entity';
export declare class RefTokenRepository extends Repository<RefToken> {
    createOrUpdateRefToken(userIdx: number, platform: string, refToken: string): Promise<void>;
}
