import { PartialType } from '@nestjs/mapped-types';
import { CreateTelematicsProviderDto } from './create-telematics-provider.dto';

export class UpdateTelematicsProviderDto extends PartialType(
  CreateTelematicsProviderDto,
) {}
