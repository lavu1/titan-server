import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OfficePersonelService } from './office-personel.service';
import { CreateOfficePersonelDto } from './dto/create-office-personel.dto';
import { UpdateOfficePersonelDto } from './dto/update-office-personel.dto';

@Controller('office-personel')
export class OfficePersonelController {
  constructor(private readonly officePersonelService: OfficePersonelService) {}

  @Post()
  create(@Body() createOfficePersonelDto: CreateOfficePersonelDto) {
    return this.officePersonelService.create(createOfficePersonelDto);
  }

  @Get()
  findAll() {
    return this.officePersonelService.findAll();
  }

  @Get(':officePersonnelId')
  findOne(@Param('officePersonnelId') officePersonnelId: string) {
    return this.officePersonelService.findOne(+officePersonnelId);
  }

  @Patch(':officePersonnelId/update')
  update(
    @Param('officePersonnelId') officePersonnelId: string,
    @Body() updateOfficePersonelDto: UpdateOfficePersonelDto,
  ) {
    return this.officePersonelService.update(
      +officePersonnelId,
      updateOfficePersonelDto,
    );
  }

  @Delete(':officePersonnelId/delete')
  remove(@Param('officePersonnelId') officePersonnelId: string) {
    return this.officePersonelService.remove(+officePersonnelId);
  }
}
