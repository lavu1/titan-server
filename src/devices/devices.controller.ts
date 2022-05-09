import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { DevicesService } from './devices.service';
  import { CreateDevicesDto } from './dto/create-devices.dto';
  import { UpdateDevicesDto } from './dto/update-devices.dto';
  
  @Controller('devices')
  export class DevicesController {
    constructor(
      private readonly devicesService: DevicesService,
    ) {}
  
    @Post()
    create(@Body() createDevicesDto: CreateDevicesDto) {
      return this.devicesService.create(createDevicesDto);
    }
  
    @Get()
    findAll() {
      return this.devicesService.findAll();
    }
  
    @Get(':Id')
    findOne(@Param('Id') userId: string) {
      return this.devicesService.findOne(+userId);
    }
  
    @Patch(':Id/update')
    update(
      @Param('Id') userId: string,
      @Body() updateDevicesDto: UpdateDevicesDto,
    ) {
      return this.devicesService.update(
        +userId,
        updateDevicesDto,
      );
    }
  
    @Delete(':userId/delete')
    remove(@Param('userId') Id: string) {
      return this.devicesService.remove(+Id);
    }
  }
  