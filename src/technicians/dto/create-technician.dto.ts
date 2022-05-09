import { IsEmail, IsNotEmpty, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// class AddressDTO {
//     readonly street: string;
//     readonly street2: string;
//     readonly city: string;
//     readonly state: string;
//     readonly zipCode: number;
// }

export class CreateTechnicianDto {
  readonly uid: string;

  readonly firstName: string;

  readonly lastName: string;

  readonly referralSource: string;

  readonly companyName: string;

  readonly cellPhone: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  // @ValidateNested({ each: true })
  // @Type(() => AddressDTO)
  // readonly address: AddressDTO

  readonly street: string;

  readonly street2: string;

  readonly city: string;

  readonly state: string;

  readonly zipCode: number;

  readonly emgContact: string;

  readonly attachments: string;

  @IsDate()
  readonly createdAt: Date;

  @IsDate()
  readonly updatedAt: Date;
}
