import { Repository } from 'typeorm';
import { ChatConversation } from '../entities/chat-conversation.entity';
import { PageRequest } from 'src/core/page';
export declare class ChatConversationRepository extends Repository<ChatConversation> {
    findMyBid(pageRequest: PageRequest, userIdx: number): Promise<[ChatConversation[], number]>;
}
