import { Controller, Get } from '@nestjs/common';
import { GloberHelperService } from 'src/shared/glober-helper/glober-helper.service';

@Controller('order')
export class orderController {
  constructor(private readonly globalHelperSevice: GloberHelperService) {}

  @Get('/global')
  globalFunction(): string {
    return this.globalHelperSevice.globalFunction();
  }
}
