import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OfficePersonel {
  @PrimaryGeneratedColumn('increment')
  officePersonnelId: number;

  @Column({ nullable: true })
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true })
  fullName: string;

  @Column({ nullable: true })
  office: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  openPhoneOffice: string;

  @Column({ nullable: true })
  openPhoneDirect: string;
}
