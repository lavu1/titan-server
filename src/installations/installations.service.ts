import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateInstallationDto } from './dto/create-installation.dto';
import { UpdateInstallationDto } from './dto/update-installation.dto';
import { Installation } from './entities/installation.entity';

@Injectable()
export class InstallationsService {
  constructor(
    @InjectRepository(Installation)
    private installationsRespository: Repository<Installation>,
  ) {}

  create(createInstallationDto: CreateInstallationDto) {
    const installations = this.installationsRespository.save(
      createInstallationDto,
    );
    return installations;
  }

  findAll(): Promise<any[]> {
    const installations = this.installationsRespository.find();
    return installations;
  }

  findOne(installationId: number): Promise<any> {
    const installation = this.installationsRespository.findOne(installationId);
    return installation;
  }

  update(
    installationId: number,
    updateInstallationDto: UpdateInstallationDto,
  ): Promise<UpdateResult> {
    const installation = this.installationsRespository.update(
      installationId,
      updateInstallationDto,
    );
    return installation;
  }

  remove(installationId: number): Promise<DeleteResult> {
    const installation = this.installationsRespository.delete(installationId);
    return installation;
  }
}
