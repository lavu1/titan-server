import { Appointment } from 'src/appointments/entities/appointment.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  OneToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Technician {
  @PrimaryGeneratedColumn()
  technicianId: string;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  referralSource: string;

  @Column({ nullable: true })
  companyName: string;

  @Column({ nullable: true })
  cellPhone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'simple-json', nullable: true })
  mapCenter: { lat: string; lng: string };

  @Column({ nullable: true })
  readonly street: string;

  @Column({ nullable: true })
  readonly street2: string;

  @Column({ nullable: true })
  readonly city: string;

  @Column({ nullable: true })
  readonly state: string;

  @Column({ nullable: true })
  readonly zipCode: number;

  @Column({ nullable: true })
  emgContact: string;

  // To Do: should be a list of objects eg images, pdf etc
  @Column({ nullable: true })
  attachments: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
