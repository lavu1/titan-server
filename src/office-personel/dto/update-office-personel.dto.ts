import { PartialType } from '@nestjs/mapped-types';
import { CreateOfficePersonelDto } from './create-office-personel.dto';

export class UpdateOfficePersonelDto extends PartialType(
  CreateOfficePersonelDto,
) {}
