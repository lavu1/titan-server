import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JobSite {
  @PrimaryGeneratedColumn()
  jobSiteId: number;

  @Column({ nullable: true })
  locationName: string;

  @Column({ nullable: true })
  branchCode: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'simple-json', nullable: true })
  mapCenter: { lat: string; lng: string };
}
