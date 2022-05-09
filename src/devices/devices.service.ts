import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateDevicesDto } from './dto/create-devices.dto';
import { UpdateDevicesDto } from './dto/update-devices.dto';
import { Devices } from './entities/devices.entity';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Devices)
    private devicesRepository: Repository<Devices>,
  ) {}
  create(createDevicesDto: CreateDevicesDto) {
    const devices = this.devicesRepository.save(
      createDevicesDto,
    );
    return devices;
  }

  findAll() {
    const devices = this.devicesRepository.find();
    return devices;
  }

  findOne(Id: number) {
    const devices =
      this.devicesRepository.findOne(Id);
    return devices;
  }

  update(
    Id: number,
    updateDevicesDto: UpdateDevicesDto,
  ): Promise<UpdateResult> {
    const updateDevices = this.devicesRepository.update(
      Id,
      updateDevicesDto,
    );
    return updateDevices;
  }

  remove(Id: number): Promise<DeleteResult> {
    const removeDevice =
      this.devicesRepository.delete(Id);
    return removeDevice;
  }
}
