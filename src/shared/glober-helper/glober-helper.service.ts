import { Injectable } from '@nestjs/common';

@Injectable()
export class GloberHelperService {
  globalFunction(): string {
    return 'use global module';
  }
}
