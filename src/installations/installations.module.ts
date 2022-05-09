import { Module } from '@nestjs/common';
import { InstallationsService } from './installations.service';
import { InstallationsController } from './installations.controller';
import { Installation } from './entities/installation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Installation])],
  controllers: [InstallationsController],
  providers: [InstallationsService],
})
export class InstallationsModule {}
