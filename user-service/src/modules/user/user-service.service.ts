import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from './models';

@Injectable()
export class UserServiceClass {
  constructor(
    @InjectRepository(UserService)
    private userRepo: Repository<UserService>,
  ) {}

  async findAll(): Promise<UserService[]> {
    return await this.userRepo.find();
  }

  async findOne(id: number): Promise<UserService | null> {
    return await this.userRepo.findOne({ where: { id } });
  }

  async create(userData: Partial<UserService>) {
    const newUser = this.userRepo.create(userData);
    await this.userRepo.save(newUser);
    return newUser;
  }

  async update(id: number, updateUserData: Partial<UserService>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepo.update(id, updateUserData);
    return await this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.userRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('User not found');
    }
    return result;
  }
}
