import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { Devices } from './entities/devices.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Devices])],
  controllers: [DevicesController],
  providers: [DevicesService],
})
export class DevicesModule {}