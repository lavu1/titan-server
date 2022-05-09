import { FleetOwner } from 'src/fleet-owners/entities/fleet-owner.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  Column,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Generated('increment')
  vehicleRecordId: string;

  @Column({ nullable: true })
  vehicleId: string;

  @Column({ nullable: true })
  vehicleName: string;

  @Column({ nullable: true })
  model: string;

  @Column({ nullable: true })
  modelYear: string;

  @Column({ nullable: true })
  make: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  registrationPlate: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  attachments: string;

  @Column({ nullable: true })
  fleetOwner: string;

  // @ManyToOne(() => FleetOwner, fleetOwner => fleetOwner.vehicles)
  // fleetOwner: FleetOwner;
}
