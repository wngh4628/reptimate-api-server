/// <reference types="express" />
import { LiveStreamService } from './live_stream.service';
import { StreamKeyDto } from './dtos/steam-key.dto';
export declare class LiveStreamController {
    private liveStreamService;
    constructor(liveStreamService: LiveStreamService);
    startLiveStream(res: any, dto: StreamKeyDto): Promise<import("express").Response<unknown, Record<string, any>>>;
    endLiveStream(res: any, dto: StreamKeyDto): Promise<import("express").Response<unknown, Record<string, any>>>;
}
