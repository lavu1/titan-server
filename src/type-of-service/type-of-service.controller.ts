import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeOfServiceService } from './type-of-service.service';
import { CreateTypeOfServiceDto } from './dto/create-type-of-service.dto';
import { UpdateTypeOfServiceDto } from './dto/update-type-of-service.dto';

@Controller('type-of-service')
export class TypeOfServiceController {
  constructor(private readonly typeOfServiceService: TypeOfServiceService) {}

  @Post()
  create(@Body() createTypeOfServiceDto: CreateTypeOfServiceDto) {
    return this.typeOfServiceService.create(createTypeOfServiceDto);
  }

  @Get()
  findAll() {
    return this.typeOfServiceService.findAll();
  }

  @Get(':typeOfServiceId')
  findOne(@Param('typeOfServiceId') typeOfServiceId: string) {
    return this.typeOfServiceService.findOne(+typeOfServiceId);
  }

  @Patch(':typeOfServiceId')
  update(
    @Param('typeOfServiceId') typeOfServiceId: string,
    @Body() updateTypeOfServiceDto: UpdateTypeOfServiceDto,
  ) {
    return this.typeOfServiceService.update(
      +typeOfServiceId,
      updateTypeOfServiceDto,
    );
  }

  @Delete(':typeOfServiceId')
  remove(@Param('typeOfServiceId') typeOfServiceId: string) {
    return this.typeOfServiceService.remove(+typeOfServiceId);
  }
}
