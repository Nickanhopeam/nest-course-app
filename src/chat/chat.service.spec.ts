import { Test, TestingModule } from '@nestjs/testing';
import { chatService } from './chat.service';

describe('ChatService', () => {
  let service: chatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [chatService],
    }).compile();

    service = module.get<chatService>(chatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
