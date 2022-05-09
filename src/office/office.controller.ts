import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { OfficeService } from './office.service';
  import { CreateOfficeDto } from './dto/create-office.dto';
  import { UpdateOfficeDto } from './dto/update-office.tdo';
  
  @Controller('office')
  export class OfficeController {
    constructor(
      private readonly officeService: OfficeService,
    ) {}
  
    @Post()
    create(@Body() createOfficeDto: CreateOfficeDto) {
      return this.officeService.create(createOfficeDto);
    }
  
    @Get()
    findAll() {
      return this.officeService.findAll();
    }
  
    @Get(':userId')
    findOne(@Param('userId') userId: string) {
      return this.officeService.findOne(+userId);
    }
  
    @Patch(':userId/update')
    update(
      @Param('userId') userId: string,
      @Body() updateUsersDto: UpdateOfficeDto,
    ) {
      return this.officeService.update(
        +userId,
        UpdateOfficeDto,
      );
    }
  
    @Delete(':userId/delete')
    remove(@Param('userId') userId: string) {
      return this.officeService.remove(+userId);
    }
  }
  