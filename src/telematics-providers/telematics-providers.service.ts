import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateTelematicsProviderDto } from './dto/create-telematics-provider.dto';
import { UpdateTelematicsProviderDto } from './dto/update-telematics-provider.dto';
import { TelematicsProvider } from './entities/telematics-provider.entity';

@Injectable()
export class TelematicsProvidersService {
  constructor(
    @InjectRepository(TelematicsProvider)
    private telematicsProviderRepository: Repository<TelematicsProvider>,
  ) {}
  create(createTelematicsProviderDto: CreateTelematicsProviderDto) {
    const telematicsProvider = this.telematicsProviderRepository.save(
      createTelematicsProviderDto,
    );
    return telematicsProvider;
  }

  findAll() {
    const telematicsProviders = this.telematicsProviderRepository.find();
    return telematicsProviders;
  }

  findOne(telematicProviderId: number) {
    const telematicsProvider =
      this.telematicsProviderRepository.findOne(telematicProviderId);
    return telematicsProvider;
  }

  update(
    telematicProviderId: number,
    updateTelematicsProviderDto: UpdateTelematicsProviderDto,
  ): Promise<UpdateResult> {
    const updateTelematicsProvider = this.telematicsProviderRepository.update(
      telematicProviderId,
      updateTelematicsProviderDto,
    );
    return updateTelematicsProvider;
  }

  remove(telematicProviderId: number): Promise<DeleteResult> {
    const removeTelematicsProvider =
      this.telematicsProviderRepository.delete(telematicProviderId);
    return removeTelematicsProvider;
  }
}
