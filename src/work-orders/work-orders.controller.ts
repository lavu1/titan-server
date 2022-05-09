import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkOrdersService } from './work-orders.service';
import { CreateWorkOrderDto } from './dto/create-work-order.dto';
import { UpdateWorkOrderDto } from './dto/update-work-order.dto';

@Controller('work-orders')
export class WorkOrdersController {
  constructor(private readonly workOrdersService: WorkOrdersService) {}

  @Post()
  create(@Body() createWorkOrderDto: CreateWorkOrderDto) {
    console.log(createWorkOrderDto);
    return this.workOrdersService.create(createWorkOrderDto);
  }

  @Get()
  findAll() {
    return this.workOrdersService.findAll();
  }

  @Get(':workOrderId')
  findOne(@Param('workOrderId') workOrderId: string) {
    return this.workOrdersService.findOne(+workOrderId);
  }

  @Patch(':workOrderId/update')
  update(
    @Param('workOrderId') workOrderId: string,
    @Body() updateWorkOrderDto: UpdateWorkOrderDto,
  ) {
    return this.workOrdersService.update(+workOrderId, updateWorkOrderDto);
  }

  @Delete(':workOrderId/delete')
  remove(@Param('workOrderId') workOrderId: string) {
    return this.workOrdersService.remove(+workOrderId);
  }
}
