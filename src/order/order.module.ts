import { Module } from '@nestjs/common';
import { orderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  controllers: [orderController],
  providers: [OrderService],
})
export class OrderModule {}
