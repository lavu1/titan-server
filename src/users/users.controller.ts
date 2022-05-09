import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { UsersService } from './users.service';
  import { CreateUserDto } from './dto/create-users.dto';
  import { UpdateUserDto } from './dto/update-users.dto';
  
  @Controller('users')
  export class UsersController {
    constructor(
      private readonly usersService: UsersService,
    ) {}
  
    @Post()
    create(@Body() createUsersDto: CreateUserDto) {
      return this.usersService.create(createUsersDto);
    }
  
    @Get()
    findAll() {
      return this.usersService.findAll();
    }
  
    @Get(':userId')
    findOne(@Param('userId') userId: string) {
      return this.usersService.findOne(+userId);
    }
  
    @Patch(':userId/update')
    update(
      @Param('userId') userId: string,
      @Body() updateUsersDto: UpdateUserDto,
    ) {
      return this.usersService.update(
        +userId,
        updateUsersDto,
      );
    }
  
    @Delete(':userId/delete')
    remove(@Param('userId') userId: string) {
      return this.usersService.remove(+userId);
    }
  }
  