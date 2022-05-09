import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateFleetOwnerDto } from './dto/create-fleet-owner.dto';
import { UpdateFleetOwnerDto } from './dto/update-fleet-owner.dto';
import { FleetOwner } from './entities/fleet-owner.entity';

@Injectable()
export class FleetOwnersService {
  constructor(
    @InjectRepository(FleetOwner)
    private fleetOwnerRepository: Repository<FleetOwner>,
  ) {}

  create(createFleetOwnerDto: CreateFleetOwnerDto) {
    const fleetOwner = this.fleetOwnerRepository.save(createFleetOwnerDto);
    return fleetOwner;
  }

  findAll(): Promise<any[]> {
    const fleetOwner = this.fleetOwnerRepository.find();
    return fleetOwner;
  }

  findOne(fleetOwnerId: number): Promise<any> {
    const fleetOwner = this.fleetOwnerRepository.findOne(fleetOwnerId);
    return fleetOwner;
  }

  update(
    fleetOwnerId: number,
    updateFleetOwnerDto: UpdateFleetOwnerDto,
  ): Promise<UpdateResult> {
    const fleetOwner = this.fleetOwnerRepository.update(
      fleetOwnerId,
      updateFleetOwnerDto,
    );
    return fleetOwner;
  }

  remove(fleetOwnerId: number): Promise<DeleteResult> {
    const fleetOwner = this.fleetOwnerRepository.delete(fleetOwnerId);
    return fleetOwner;
  }
}
