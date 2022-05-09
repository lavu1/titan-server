import { Module } from '@nestjs/common';
import { FleetOwnersService } from './fleet-owners.service';
import { FleetOwnersController } from './fleet-owners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FleetOwner } from './entities/fleet-owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FleetOwner])],
  controllers: [FleetOwnersController],
  providers: [FleetOwnersService],
})
export class FleetOwnersModule {}
