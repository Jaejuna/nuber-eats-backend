import { Field, InputType, PartialType } from '@nestjs/graphql';
import { createRestaurantDto } from './create-restaurant.dto';

@InputType()
class upadteRestaurantInputType extends PartialType(createRestaurantDto){}

@InputType()
export class UpdateRestaurantDto {
  @Field(type => Number)
  id: number;

  @Field(type => upadteRestaurantInputType)
  data: upadteRestaurantInputType;
}