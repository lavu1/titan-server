import { Injectable } from '@nestjs/common';
import { CreateTechnicianDto } from './dto/create-technician.dto';
import { UpdateTechnicianDto } from './dto/update-technician.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Technician } from './entities/technician.entity';

@Injectable()
export class TechniciansService {
  constructor(
    @InjectRepository(Technician)
    private technicianRepository: Repository<Technician>,
  ) {}

  create(createTechnicianDto: CreateTechnicianDto) {
    const technician = this.technicianRepository.save(createTechnicianDto);
    return technician;
  }

  findAll(): Promise<Technician[]> {
    return this.technicianRepository.find();
  }

  findOne(technicianId: number): Promise<Technician> {
    return this.technicianRepository.findOne(technicianId);
  }

  update(
    technicianId: number,
    updateTechnicianDto: UpdateTechnicianDto,
  ): Promise<UpdateResult> {
    return this.technicianRepository.update(technicianId, updateTechnicianDto);
  }

  remove(technicianId: number): Promise<DeleteResult> {
    return this.technicianRepository.delete(technicianId);
  }
}
