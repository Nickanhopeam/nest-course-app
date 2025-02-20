import { Test, TestingModule } from '@nestjs/testing';
import { orderController } from './order.controller';

describe('OrderController', () => {
  let controller: orderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [orderController],
    }).compile();

    controller = module.get<orderController>(orderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
