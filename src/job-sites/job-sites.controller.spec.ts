import { Test, TestingModule } from '@nestjs/testing';
import { JobSitesController } from './job-sites.controller';
import { JobSitesService } from './job-sites.service';

describe('JobSitesController', () => {
  let controller: JobSitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobSitesController],
      providers: [JobSitesService],
    }).compile();

    controller = module.get<JobSitesController>(JobSitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
