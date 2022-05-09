import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FleetOwnersService } from './fleet-owners.service';
import { CreateFleetOwnerDto } from './dto/create-fleet-owner.dto';
import { UpdateFleetOwnerDto } from './dto/update-fleet-owner.dto';

@Controller('fleet-owners')
export class FleetOwnersController {
  constructor(private readonly fleetOwnersService: FleetOwnersService) {}

  @Post()
  create(@Body() createFleetOwnerDto: CreateFleetOwnerDto) {
    return this.fleetOwnersService.create(createFleetOwnerDto);
  }

  @Get()
  findAll() {
    return this.fleetOwnersService.findAll();
  }

  @Get(':fleetOwnerId')
  findOne(@Param('fleetOwnerId') fleetOwnerId: string) {
    return this.fleetOwnersService.findOne(+fleetOwnerId);
  }

  @Patch(':fleetOwnerId/update')
  update(
    @Param('fleetOwnerId') fleetOwnerId: string,
    @Body() updateFleetOwnerDto: UpdateFleetOwnerDto,
  ) {
    return this.fleetOwnersService.update(+fleetOwnerId, updateFleetOwnerDto);
  }

  @Delete(':fleetOwnerId/delete')
  remove(@Param('fleetOwnerId') fleetOwnerId: string) {
    return this.fleetOwnersService.remove(+fleetOwnerId);
  }
}
