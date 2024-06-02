import { Repository } from 'typeorm';
import { LiveStream } from '../entities/live-stream.entity';
export declare class LiveStreamRepository extends Repository<LiveStream> {
    checkStreamKeyForm(streamKey: string): boolean;
}
