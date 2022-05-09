import { Entity, PrimaryGeneratedColumn, Generated, Column } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('increment')
  userId: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  address: string; 

  @Column({ nullable: true })
  notes: string;

  @Column({ type: 'simple-json', nullable: true })
  mapCenter: { lat: string; lng: string };

}
