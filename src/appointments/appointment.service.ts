import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentsRepository: Repository<Appointment>,
  ) {}

  create(createAppointmentDto: CreateAppointmentDto) {
    const appointments = this.appointmentsRepository.save(createAppointmentDto);
    return appointments;
  }

  findAll(): Promise<any[]> {
    const appointments = this.appointmentsRepository.find();
    return appointments;
  }

  findOne(appointmentId: number): Promise<any> {
    const appointment = this.appointmentsRepository.findOne(appointmentId);
    return appointment;
  }

  update(
    appointmentId: number,
    updateAppointmentDto: UpdateAppointmentDto,
  ): Promise<UpdateResult> {
    const appointment = this.appointmentsRepository.update(
      appointmentId,
      updateAppointmentDto,
    );
    return appointment;
  }

  remove(appointmentId: number): Promise<DeleteResult> {
    return  this.appointmentsRepository.delete(appointmentId);
    
  }
}
