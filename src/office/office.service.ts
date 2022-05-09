import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.tdo';
import { Office } from './entities/office.entity';

@Injectable()
export class OfficeService {
  constructor(
    @InjectRepository(Office)
    private officeRepository: Repository<Office>,
  ) {}
  create(createOfficeDto: CreateOfficeDto) {
    const office = this.officeRepository.save(
      createOfficeDto,
    );
    return office;
  }

  findAll() {
    const office = this.officeRepository.find();
    return office;
  }

  findOne(userId: number) {
    const office =
      this.officeRepository.findOne(userId);
    return office;
  }

  update(
    userId: number,
    updateOfficeDto: UpdateOfficeDto,
  ): Promise<UpdateResult> {
    const updateOffice = this.officeRepository.update(
      userId,
      updateOfficeDto,
    );
    return updateOffice;
  }

  remove(UserId: number): Promise<DeleteResult> {
    const removeOffice =
      this.officeRepository.delete(UserId);
    return removeOffice;
  }
}
