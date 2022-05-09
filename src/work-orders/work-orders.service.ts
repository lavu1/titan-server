import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  UpdateResult,
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
} from 'typeorm';
import { CreateWorkOrderDto } from './dto/create-work-order.dto';
import { UpdateWorkOrderDto } from './dto/update-work-order.dto';
import { WorkOrder } from './entities/work-order.entity';

@Injectable()
export class WorkOrdersService {
  constructor(
    @InjectRepository(WorkOrder)
    private workOrderRepository: Repository<WorkOrder>,
  ) {}

  create(createWorkOrderDto: CreateWorkOrderDto) {
    // workOrder
    //return this.workOrderRepository.preload(createWorkOrderDto)

    const workOrder = this.workOrderRepository.save(createWorkOrderDto);
    return workOrder;
  }

  findAll(): Promise<any[]> {
    const options: FindManyOptions = {
      relations: ['appointments'],
    };
    const workOrders = this.workOrderRepository.find(options);
    return workOrders;
  }

  findOne(workOrderId: number): Promise<any> {
    const options: FindOneOptions = {
      relations: ['appointments'],
    };
    const workOrder = this.workOrderRepository.findOne(workOrderId, options);
    return workOrder;
  }

  update(
    workOrderId: number,
    updateWorkOrderDto: UpdateWorkOrderDto,
  ): Promise<UpdateResult> {
    const updatedWorkOrder = this.workOrderRepository.update(
      workOrderId,
      updateWorkOrderDto,
    );
    return updatedWorkOrder;
  }

  remove(workOrderId: number): Promise<DeleteResult> {
    const deletedWorkOrder = this.workOrderRepository.delete(workOrderId);
    return deletedWorkOrder;
  }
}
