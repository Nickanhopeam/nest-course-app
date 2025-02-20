import { Module } from '@nestjs/common';
import { chatController } from './chat.controller';
import { chatService } from './chat.service';

@Module({
  controllers: [chatController],
  providers: [chatService],
})
export class ChatModule {}
