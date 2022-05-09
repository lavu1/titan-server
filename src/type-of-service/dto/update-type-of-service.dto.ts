import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeOfServiceDto } from './create-type-of-service.dto';

export class UpdateTypeOfServiceDto extends PartialType(
  CreateTypeOfServiceDto,
) {}
