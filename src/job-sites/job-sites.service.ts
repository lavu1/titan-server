import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateJobSiteDto } from './dto/create-job-site.dto';
import { UpdateJobSiteDto } from './dto/update-job-site.dto';
import { JobSite } from './entities/job-site.entity';

@Injectable()
export class JobSitesService {
  constructor(
    @InjectRepository(JobSite)
    private jobSiteRepository: Repository<JobSite>,
  ) {}

  create(createJobSiteDto: CreateJobSiteDto) {
    const jobSite = this.jobSiteRepository.save(createJobSiteDto);
    return jobSite;
  }

  findAll(): Promise<any[]> {
    const jobSites = this.jobSiteRepository.find();
    return jobSites;
  }

  findOne(jobSiteId: number): Promise<any> {
    const jobSite = this.jobSiteRepository.findOne(jobSiteId);
    return jobSite;
  }

  update(
    jobSiteId: number,
    updateJobSiteDto: UpdateJobSiteDto,
  ): Promise<UpdateResult> {
    const jobSite = this.jobSiteRepository.update(jobSiteId, updateJobSiteDto);
    return jobSite;
  }

  remove(jobSiteId: number): Promise<DeleteResult> {
    const jobSite = this.jobSiteRepository.delete(jobSiteId);
    return jobSite;
  }
}
