import { Module } from '@nestjs/common';
import { TelematicsProvidersService } from './telematics-providers.service';
import { TelematicsProvidersController } from './telematics-providers.controller';
import { TelematicsProvider } from './entities/telematics-provider.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TelematicsProvider])],
  controllers: [TelematicsProvidersController],
  providers: [TelematicsProvidersService],
})
export class TelematicsProvidersModule {}
