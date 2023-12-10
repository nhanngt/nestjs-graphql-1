import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { NewUserDTO } from './dto/new-user.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class UserService {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async findOneById(id: string): Promise<User> {
    const user = this.users.find((u) => u.id === id);
    return user;
  }

  async addNewUser(user: NewUserDTO): Promise<User> {
    const newUser: User = {
      ...user,
      createdDate: new Date(),
      id: randomUUID(),
    };
    this.users.push(newUser);

    return newUser;
  }
}
