import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Get()
  findAll() {
    return this.appointmentService.findAll();
  }

  @Get(':appointmentId')
  findOne(@Param('appointmentId') appointmentId: string) {
    return this.appointmentService.findOne(+appointmentId);
  }

  @Patch(':appointmentId/update')
  update(
    @Param('appointmentId') appointmentId: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentService.update(+appointmentId, updateAppointmentDto);
  }

  @Delete(':appointmentId/delete')
  remove(@Param('appointmentId') appointmentId: string) {
    return this.appointmentService.remove(+appointmentId);
  }
}
