import { Test, TestingModule } from '@nestjs/testing';
import { FleetOwnersService } from './fleet-owners.service';

describe('FleetOwnersService', () => {
  let service: FleetOwnersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FleetOwnersService],
    }).compile();

    service = module.get<FleetOwnersService>(FleetOwnersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
