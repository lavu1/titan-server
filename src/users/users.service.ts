import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}
  create(createUsersDto: CreateUserDto) {
    const users = this.usersRepository.save(
      createUsersDto,
    );
    return users;
  }

  findAll() {
    const users = this.usersRepository.find();
    return users;
  }

  findOne(userId: number) {
    const users =
      this.usersRepository.findOne(userId);
    return users;
  }

  update(
    userId: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    const updateUsers = this.usersRepository.update(
      userId,
      updateUserDto,
    );
    return updateUsers;
  }

  remove(UserId: number): Promise<DeleteResult> {
    const removeUser =
      this.usersRepository.delete(UserId);
    return removeUser;
  }
}
