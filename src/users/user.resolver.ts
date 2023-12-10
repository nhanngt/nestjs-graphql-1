import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';
import { NewUserDTO } from './dto/new-user.dto';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async getUserById(@Args('id', { type: () => String }) id: string) {
    const user = await this.userService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Mutation((returns) => User)
  async addNewUser(@Args('newUserDTO') newUserDTO: NewUserDTO): Promise<User> {
    const newUser = await this.userService.addNewUser(newUserDTO);

    return newUser;
  }
}
