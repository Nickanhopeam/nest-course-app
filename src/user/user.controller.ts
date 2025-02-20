import { Controller, Get } from '@nestjs/common';
import { GloberHelperService } from 'src/shared/glober-helper/glober-helper.service';

@Controller('user')
export class userController {
  constructor(private readonly globalHelperSevice: GloberHelperService) {}

  @Get('/global')
  globalFunction(): string {
    return this.globalHelperSevice.globalFunction();
  }
}
