import BaseEntity from 'src/core/entity/base.entity';
import { CreateLiveStreamDto } from '../dtos/create-live-stream.dto';
import { UpdateLiveEndTimeDto } from '../dtos/update-live-end-time.dto';
import { UpdateLiveStartTimeDto } from '../dtos/update-live-start-time.dto';
export declare class LiveStream extends BaseEntity {
    boardIdx: number;
    streamKey: string;
    startTime: Date;
    endTime: Date;
    state: number;
    static fromDto(dto: CreateLiveStreamDto): LiveStream;
    updateEndFromDto(dto: UpdateLiveEndTimeDto): void;
    updateStartFromDto(dto: UpdateLiveStartTimeDto): void;
}
