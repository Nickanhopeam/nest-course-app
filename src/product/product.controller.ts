import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

import { GloberHelperService } from 'src/shared/glober-helper/glober-helper.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    //private readonly unilityservice: UtilityService,
    private readonly globerservice: GloberHelperService,
  ) {}

  // @Get('/Shared')
  // ProductFunction() {
  //   return this.unilityservice.shareFunction();
  // }
  @Get('/global')
  GlobalFunction() {
    return this.globerservice.globalFunction();
  }
}
