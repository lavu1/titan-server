import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class FleetOwner {
  @PrimaryGeneratedColumn('increment')
  public fleetOwnerId: string;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  mainPocName: string;

  @Column({ nullable: true })
  mainPocOfficePhone: string;

  @Column({ nullable: true })
  mainPocCellPhone: string;

  @Column({ nullable: true })
  mainPocEmail: string;

  @Column({ nullable: true })
  installationReportEmail: string;

  @Column({ nullable: true })
  companyWebsite: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'simple-json', nullable: true })
  mapCenter: { lat: string; lng: string };

  @Column({ nullable: true })
  vehicles: string;

  //  @OneToMany(() => Vehicle, vehicle => vehicle.fleetOwner, { cascade: true })
  // vehicles: Vehicle[];
}
