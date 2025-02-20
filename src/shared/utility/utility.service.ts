import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
  shareFunction(): string {
    return 'use utility shared model';
  }
}
