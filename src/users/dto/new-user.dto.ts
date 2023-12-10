import { Field, InputType, Int, ID } from '@nestjs/graphql';

@InputType()
export class NewUserDTO {
  @Field({ nullable: false })
  firstname: string;

  @Field({ nullable: false })
  lastname: string;

  @Field(() => Int)
  age: number;
}
