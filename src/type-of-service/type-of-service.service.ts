import { Injectable } from '@nestjs/common';
import { CreateTypeOfServiceDto } from './dto/create-type-of-service.dto';
import { UpdateTypeOfServiceDto } from './dto/update-type-of-service.dto';

@Injectable()
export class TypeOfServiceService {
  create(createTypeOfServiceDto: CreateTypeOfServiceDto) {
    return 'This action adds a new typeOfService';
  }

  findAll() {
    return `This action returns all typeOfService`;
  }

  findOne(typeOfServiceId: number) {
    return `This action returns a #${typeOfServiceId} typeOfService`;
  }

  update(
    typeOfServiceId: number,
    updateTypeOfServiceDto: UpdateTypeOfServiceDto,
  ) {
    return `This action updates a #${typeOfServiceId} typeOfService`;
  }

  remove(typeOfServiceId: number) {
    return `This action removes a #${typeOfServiceId} typeOfService`;
  }
}
