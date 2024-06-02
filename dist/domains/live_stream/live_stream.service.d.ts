import { StreamKeyDto } from './dtos/steam-key.dto';
import { LiveStream } from './entities/live-stream.entity';
import { LiveStreamRepository } from './repositories/live-stream.repository';
import { BoardAuctionRepository } from '../board/repositories/board-auction.repository';
export declare class LiveStreamService {
    private liveStreamRepository;
    private boardAuctionRepository;
    constructor(liveStreamRepository: LiveStreamRepository, boardAuctionRepository: BoardAuctionRepository);
    setLiveStreamInfo(val: string, dto: StreamKeyDto): Promise<LiveStream>;
}
