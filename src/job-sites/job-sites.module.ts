import { Module } from '@nestjs/common';
import { JobSitesService } from './job-sites.service';
import { JobSitesController } from './job-sites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobSite } from './entities/job-site.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobSite])],
  controllers: [JobSitesController],
  providers: [JobSitesService],
})
export class JobSitesModule {}
