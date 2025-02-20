import { Test, TestingModule } from '@nestjs/testing';
import { GloberHelperController } from './glober-helper.controller';

describe('GloberHelperController', () => {
  let controller: GloberHelperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GloberHelperController],
    }).compile();

    controller = module.get<GloberHelperController>(GloberHelperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
