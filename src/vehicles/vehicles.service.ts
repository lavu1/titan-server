import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateDevicesDto } from 'src/devices/dto/update-devices.dto';
import { Repository, UpdateResult } from 'typeorm';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  create(createVehicleDto: CreateVehicleDto) {
    const vehicle = this.vehicleRepository.save(createVehicleDto);
    return vehicle;
  }

  findAll(): Promise<any[]> {
    const vehicle = this.vehicleRepository.find();
    return vehicle;
  }

  findOne(id: number): Promise<any> {
    const vehicle = this.vehicleRepository.findOne(id);
    return vehicle;
  }
  
  update(
    id: number,
    updateVehicleDto: UpdateDevicesDto,
  ): Promise<UpdateResult> {
    const vehicle= this.vehicleRepository.update(
      id,
      updateVehicleDto,
    );
    return vehicle;
  }

  remove(id: number) {
    return this.vehicleRepository.delete(+id);
  }
}
