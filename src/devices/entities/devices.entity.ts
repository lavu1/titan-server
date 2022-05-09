import { Entity, PrimaryGeneratedColumn, Generated, Column } from 'typeorm';

@Entity()
export class Devices {
  @PrimaryGeneratedColumn('increment')
  Id: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true })
  serialNumber: string;

  @Column({ nullable: true })
  deviceType: string;
}

