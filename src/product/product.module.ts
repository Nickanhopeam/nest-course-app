import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UtilityModule } from 'src/shared/utility/utility.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
