import { Entity, PrimaryGeneratedColumn, Generated, Column } from 'typeorm';

@Entity()
export class Office {
  @PrimaryGeneratedColumn('increment')
  userId: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  office: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  openPhoneOffice: string;

  @Column({ nullable: true })
  openPhoneDirect: string;

  @Column({ nullable: true })
  orders: string; 

  @Column({ nullable: true })
  address: string; 

  @Column({ type: 'simple-json', nullable: true })
  mapCenter: { lat: string; lng: string };

}
