import { Entity, PrimaryGeneratedColumn, Generated, Column } from 'typeorm';

@Entity()
export class Installation {
  @PrimaryGeneratedColumn('increment')
  public installationId: number;

  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true })
  date: Date; //not sure on what to set the date type to, the datet when the installation is to be done

  @Column({nullable:true})
  jobId: string

  @Column({ nullable: true })
  jobSite: string;

  @Column ({nullable: true})
  vehicleId:string

  @Column({ nullable: true })
  typeOfService: string;

  @Column({ nullable: true })
  fleetOwner: string;

  @Column({ nullable: true })
  fleetStatus: string;
}
