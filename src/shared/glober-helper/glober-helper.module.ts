import { Global, Module } from '@nestjs/common';
import { GloberHelperService } from './glober-helper.service';
import { GloberHelperController } from './glober-helper.controller';

@Global()
@Module({
  providers: [GloberHelperService],
  controllers: [GloberHelperController],
  exports: [GloberHelperService],
})
export class GloberHelperModule {}
