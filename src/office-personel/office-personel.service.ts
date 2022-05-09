import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateOfficePersonelDto } from './dto/create-office-personel.dto';
import { UpdateOfficePersonelDto } from './dto/update-office-personel.dto';
import { OfficePersonel } from './entities/office-personel.entity';

@Injectable()
export class OfficePersonelService {
  constructor(
    @InjectRepository(OfficePersonel)
    private officePersonelRepository: Repository<OfficePersonel>,
  ) {}

  create(createOfficePersonelDto: CreateOfficePersonelDto) {
    const officePersonel = this.officePersonelRepository.create(
      createOfficePersonelDto,
    );
    return officePersonel;
  }

  findAll(): Promise<any> {
    const officePersonel = this.officePersonelRepository.find();
    return officePersonel;
  }

  findOne(officePersonnelId: number): Promise<any> {
    const officePersonel = this.officePersonelRepository.findOne();
    return officePersonel;
  }

  update(
    officePersonnelId: number,
    updateOfficePersonelDto: UpdateOfficePersonelDto,
  ): Promise<UpdateResult> {
    const officePersonel = this.officePersonelRepository.update(
      officePersonnelId,
      updateOfficePersonelDto,
    );
    return officePersonel;
  }

  remove(officePersonnelId: number): Promise<any> {
    const officePersonel =
      this.officePersonelRepository.delete(officePersonnelId);
    return officePersonel;
  }
}
