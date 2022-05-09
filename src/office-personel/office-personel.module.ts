import { Module } from '@nestjs/common';
import { OfficePersonelService } from './office-personel.service';
import { OfficePersonelController } from './office-personel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfficePersonel } from './entities/office-personel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OfficePersonel])],
  controllers: [OfficePersonelController],
  providers: [OfficePersonelService],
})
export class OfficePersonelModule {}
