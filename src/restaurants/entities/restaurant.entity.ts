import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Restaurant{
  @Field(is => String)
  name: string;
  @Field(is => Boolean, {nullable:true})
  isVegan?: boolean;
  @Field(is => String, {nullable:true})
  address: string;
  @Field(is => String, {nullable:true})
  ownerName: string;
}