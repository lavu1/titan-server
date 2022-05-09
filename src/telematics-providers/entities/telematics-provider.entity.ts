import { Entity, PrimaryGeneratedColumn, Generated, Column } from 'typeorm';

@Entity()
export class TelematicsProvider {
  @PrimaryGeneratedColumn('increment')
  telematicsProviderId: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true })
  telemanticsProviderName: string;

  @Column({ nullable: true })
  mainPOCname: string;

  @Column({ nullable: true })
  mainPOCemail: string;

  @Column({ nullable: true })
  mainPOCnumber: string; //main POC phone number

  @Column({ nullable: true })
  email: string; //email for sending installation reports

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'simple-json', nullable: true })
  mapCenter: { lat: string; lng: string };

  @Column({ nullable: true })
  streetAddress1: string;

  @Column({ nullable: true })
  streetAddress2: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  zipPostalCode: string;
}
