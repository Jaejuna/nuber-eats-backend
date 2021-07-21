import { LoginInput } from './dtos/login.dto';
import { CreateAccountInput } from './dtos/create-account.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  //creating account logic
  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        return { ok: false, error: 'There is an user with that email already' };
      }
      await this.users.save(this.users.create({ email, password, role }));
      return { ok: true };
    } catch (e) {
      return { ok: false, error: 'Could not create an account' };
    }
  }

  //login logic
  async login({email, password}: LoginInput): Promise<{ ok: boolean; error?: string; token?: string; }>{
    try{
      const user = await this.users.findOne({email}); 
      if(!user){
        return{
          ok: false,
          error: "User not found",
        };
      }
      const passwordCorrect = await user.CheckPassword(password)
      if(!passwordCorrect){
        return{
          ok: false,
          error: "Wrong password"
        }
      }
      return{
        ok: true,
        token: "lalala"
      }
    }catch(error){
      return{
        ok: false,
        error,
      };
    }
  }
}
