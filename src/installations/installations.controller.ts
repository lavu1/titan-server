import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InstallationsService } from './installations.service';
import { CreateInstallationDto } from './dto/create-installation.dto';
import { UpdateInstallationDto } from './dto/update-installation.dto';

@Controller('installations')
export class InstallationsController {
  constructor(private readonly installationsService: InstallationsService) {}

  @Post()
  create(@Body() createInstallationDto: CreateInstallationDto) {
    return this.installationsService.create(createInstallationDto);
  }

  @Get()
  findAll() {
    return this.installationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.installationsService.findOne(+id);
  }

  @Patch(':id/update')
  update(
    @Param('id') id: string,
    @Body() updateInstallationDto: UpdateInstallationDto,
  ) {
    return this.installationsService.update(+id, updateInstallationDto);
  }

  @Delete(':id/delete')
  remove(@Param('id') id: string) {
    return this.installationsService.remove(+id);
  }
}
