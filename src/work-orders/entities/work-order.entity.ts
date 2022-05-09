import { Appointment } from 'src/appointments/entities/appointment.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  Column,
  OneToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class WorkOrder {
  @PrimaryGeneratedColumn('increment')
  public id: number; // bug: skips incremented ID's in increments of 10 eg. 1, 11, 21, 31...

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true })
  telematicsProvider: string;

  @Column({ nullable: true })
  fleetOwner: string;

  @Column({ nullable: true })
  jobSite: string;

  @Column({ nullable: true })
  city: string; // from job site

  @Column({ nullable: true })
  state: string; // from job site

  @Column({ nullable: true, default: 'Requested' })
  status: string;

  @Column({ nullable: true })
  techConfirmed: string;

  @Column({ nullable: true })
  workOutstanding: string;

  @Column({ nullable: true })
  cordinator: string; // from office personnel

  @Column({ nullable: true })
  startDate: string; // exits on appointment

  @Column({ nullable: true })
  totalScopeOfWork: string;

  @Column({ nullable: true })
  technician: string; // exits on appointment

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true })
  numberOfVehicles: string;

  @Column({ nullable: true })
  poc: string; // from telematics provider

  @Column({ nullable: true })
  mobileNumber: string; // from telematics provider

  @Column({ nullable: true })
  typeOfDevice: string;

  @Column({ nullable: true })
  zip: string; // from job site

  @Column({ nullable: true })
  jobType: string;

  @Column({ nullable: true })
  addOns: string;

  @OneToMany(() => Appointment, (appointment) => appointment.workOrder, {
    cascade: true,
  })
  @JoinTable()
  appointments: Appointment[];
}
