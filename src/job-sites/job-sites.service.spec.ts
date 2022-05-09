import { Test, TestingModule } from '@nestjs/testing';
import { JobSitesService } from './job-sites.service';

describe('JobSitesService', () => {
  let service: JobSitesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobSitesService],
    }).compile();

    service = module.get<JobSitesService>(JobSitesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
