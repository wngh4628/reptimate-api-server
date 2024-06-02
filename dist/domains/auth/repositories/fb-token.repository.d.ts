import { Repository } from 'typeorm';
import { FbToken } from '../entities/fb-token.entity';
export declare class FbTokenRepository extends Repository<FbToken> {
    createOrUpdateFbToken(userIdx: number, platform: string, fbToken: string): Promise<void>;
    removeFbTokenIfExists(fbToken: string): Promise<void>;
}
