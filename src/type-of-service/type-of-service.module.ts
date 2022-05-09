import { Module } from '@nestjs/common';
import { TypeOfServiceService } from './type-of-service.service';
import { TypeOfServiceController } from './type-of-service.controller';
import { TypeOfService } from './entities/type-of-service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOfService])],
  controllers: [TypeOfServiceController],
  providers: [TypeOfServiceService],
})
export class TypeOfServiceModule {}
