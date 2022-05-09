import { Test, TestingModule } from '@nestjs/testing';
import { OfficePersonelController } from './office-personel.controller';
import { OfficePersonelService } from './office-personel.service';

describe('OfficePersonelController', () => {
  let controller: OfficePersonelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfficePersonelController],
      providers: [OfficePersonelService],
    }).compile();

    controller = module.get<OfficePersonelController>(OfficePersonelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
