import { Technician } from 'src/technicians/entities/technician.entity';
import { WorkOrder } from 'src/work-orders/entities/work-order.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  Column,
  ManyToOne,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  appointmentId: number; // appointment ID

  @Generated('uuid')
  uuid: string;

  @ManyToOne(() => WorkOrder, (workOrder) => workOrder.appointments)
  workOrder: WorkOrder;

  @Column({ nullable: true })
  appointmentDate: string;

  @Column({ nullable: true })
  typeOfDevice: string;

  @Column({ nullable: true, type: 'simple-json' }) // technicians come as an array
  technician: JSON[];

  @Column({ nullable: true })
  hours: string;

  @Column({ nullable: true })
  appointmentStatus: string;

  @Column({ nullable: true })
  jobSite: string;

  @Column({nullable:true})
  notes:string;
  // @ManyToOne(() => Technician, (technician) => technician.appointments, {
  //   cascade: true,
  // })
  // @JoinTable()
  // appointments: Technician[];
}
