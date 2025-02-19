import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UtilityModule } from './shared/utility/utility.module';
import { UserModule } from './user/user.module';
import { GloberHelperModule } from './shared/glober-helper/glober-helper.module';
import { OrderModule } from './order/order.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ProductModule,
    UtilityModule,
    UserModule,
    OrderModule,
    ChatModule,
    GloberHelperModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
