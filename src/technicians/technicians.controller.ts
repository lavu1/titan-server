import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TechniciansService } from './technicians.service';
import { CreateTechnicianDto } from './dto/create-technician.dto';
import { UpdateTechnicianDto } from './dto/update-technician.dto';

@Controller('technicians')
export class TechniciansController {
  constructor(private readonly techniciansService: TechniciansService) {}

  @Post()
  create(@Body() createTechnicianDto: CreateTechnicianDto) {
    return this.techniciansService.create(createTechnicianDto);
  }

  @Get()
  findAll() {
    return this.techniciansService.findAll();
  }

  @Get(':technicianId')
  findOne(@Param('technicianId') technicianId: string) {
    return this.techniciansService.findOne(+technicianId);
  }

  @Patch(':technicianId/update')
  update(
    @Param('technicianId') technicianId: string,
    @Body() updateTechnicianDto: UpdateTechnicianDto,
  ) {
    return this.techniciansService.update(+technicianId, updateTechnicianDto);
  }

  @Delete(':technicianId/delete')
  remove(@Param('technicianId') technicianId: string) {
    return this.techniciansService.remove(+technicianId);
  }
}
