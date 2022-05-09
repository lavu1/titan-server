import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TelematicsProvidersService } from './telematics-providers.service';
import { CreateTelematicsProviderDto } from './dto/create-telematics-provider.dto';
import { UpdateTelematicsProviderDto } from './dto/update-telematics-provider.dto';

@Controller('telematics-providers')
export class TelematicsProvidersController {
  constructor(
    private readonly telematicsProvidersService: TelematicsProvidersService,
  ) {}

  @Post()
  create(@Body() createTelematicsProviderDto: CreateTelematicsProviderDto) {
    return this.telematicsProvidersService.create(createTelematicsProviderDto);
  }

  @Get()
  findAll() {
    return this.telematicsProvidersService.findAll();
  }

  @Get(':telematicProviderId')
  findOne(@Param('telematicProviderId') telematicProviderId: string) {
    return this.telematicsProvidersService.findOne(+telematicProviderId);
  }

  @Patch(':telematicProviderId/update')
  update(
    @Param('telematicProviderId') telematicProviderId: string,
    @Body() updateTelematicsProviderDto: UpdateTelematicsProviderDto,
  ) {
    return this.telematicsProvidersService.update(
      +telematicProviderId,
      updateTelematicsProviderDto,
    );
  }

  @Delete(':telematicProviderId/delete')
  remove(@Param('telematicProviderId') telematicProviderId: string) {
    return this.telematicsProvidersService.remove(+telematicProviderId);
  }
}
