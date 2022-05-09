import { PartialType } from '@nestjs/mapped-types';
import { CreateJobSiteDto } from './create-job-site.dto';

export class UpdateJobSiteDto extends PartialType(CreateJobSiteDto) {}
