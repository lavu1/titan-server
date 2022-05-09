import { Entity, PrimaryGeneratedColumn, Generated, Column } from 'typeorm';

@Entity()
export class TypeOfService {
  @PrimaryGeneratedColumn('increment')
  public typeOfServiceId: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true })
  typeOfServiceName: string;

  @Column({ nullable: true })
  notesOnTypeOfService: string;
}
