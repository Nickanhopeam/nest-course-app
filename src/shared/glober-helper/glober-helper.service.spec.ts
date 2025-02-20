import { Test, TestingModule } from '@nestjs/testing';
import { GloberHelperService } from './glober-helper.service';

describe('GloberHelperService', () => {
  let service: GloberHelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GloberHelperService],
    }).compile();

    service = module.get<GloberHelperService>(GloberHelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
