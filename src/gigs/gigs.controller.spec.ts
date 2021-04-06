import { Test, TestingModule } from '@nestjs/testing';
import { GigsController } from './gigs.controller';
import { GigsService } from './gigs.service';

describe('GigsController', () => {
  let controller: GigsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GigsController],
      providers: [GigsService],
    }).compile();

    controller = module.get<GigsController>(GigsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
