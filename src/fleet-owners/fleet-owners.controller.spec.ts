import { Test, TestingModule } from '@nestjs/testing';
import { FleetOwnersController } from './fleet-owners.controller';
import { FleetOwnersService } from './fleet-owners.service';

describe('FleetOwnersController', () => {
  let controller: FleetOwnersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FleetOwnersController],
      providers: [FleetOwnersService],
    }).compile();

    controller = module.get<FleetOwnersController>(FleetOwnersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
