import { Test, TestingModule } from '@nestjs/testing';
import { chatController } from './chat.controller';

describe('ChatController', () => {
  let controller: chatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [chatController],
    }).compile();

    controller = module.get<chatController>(chatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
