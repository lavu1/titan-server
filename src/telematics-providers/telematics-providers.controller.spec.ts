import { Test, TestingModule } from '@nestjs/testing';
import { TelematicsProvidersController } from './telematics-providers.controller';
import { TelematicsProvidersService } from './telematics-providers.service';

describe('TelematicsProvidersController', () => {
  let controller: TelematicsProvidersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TelematicsProvidersController],
      providers: [TelematicsProvidersService],
    }).compile();

    controller = module.get<TelematicsProvidersController>(
      TelematicsProvidersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
