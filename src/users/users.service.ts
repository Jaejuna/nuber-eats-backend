import { CreateAccountInput } from './dtos/create-account.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService{
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ){}

  async createAccount({ email, password, role }: CreateAccountInput) : Promise<string | undefined> {
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        return "There is an user with that email already";
      }
      await this.users.save(this.users.create({ email, password, role }));
    } catch (e) {
      return "Could not create an account";
    }
  }
}