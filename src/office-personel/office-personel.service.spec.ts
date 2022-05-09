import { Test, TestingModule } from '@nestjs/testing';
import { OfficePersonelService } from './office-personel.service';

describe('OfficePersonelService', () => {
  let service: OfficePersonelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfficePersonelService],
    }).compile();

    service = module.get<OfficePersonelService>(OfficePersonelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
