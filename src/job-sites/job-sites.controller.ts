import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JobSitesService } from './job-sites.service';
import { CreateJobSiteDto } from './dto/create-job-site.dto';
import { UpdateJobSiteDto } from './dto/update-job-site.dto';

@Controller('job-sites')
export class JobSitesController {
  constructor(private readonly jobSitesService: JobSitesService) {}

  @Post()
  create(@Body() createJobSiteDto: CreateJobSiteDto) {
    return this.jobSitesService.create(createJobSiteDto);
  }

  @Get()
  findAll() {
    return this.jobSitesService.findAll();
  }

  @Get(':jobSiteId')
  findOne(@Param('jobSiteId') jobSiteId: string) {
    return this.jobSitesService.findOne(+jobSiteId);
  }

  @Patch(':jobSiteId/update')
  update(
    @Param('jobSiteId') jobSiteId: string,
    @Body() updateJobSiteDto: UpdateJobSiteDto,
  ) {
    return this.jobSitesService.update(+jobSiteId, updateJobSiteDto);
  }

  @Delete(':jobSiteId/delete')
  remove(@Param('jobSiteId') jobSiteId: string) {
    return this.jobSitesService.remove(+jobSiteId);
  }
}
