import { Test, TestingModule } from '@nestjs/testing';
import { TelematicsProvidersService } from './telematics-providers.service';

describe('TelematicsProvidersService', () => {
  let service: TelematicsProvidersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TelematicsProvidersService],
    }).compile();

    service = module.get<TelematicsProvidersService>(
      TelematicsProvidersService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
