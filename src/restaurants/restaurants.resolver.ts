import { RestaurantService } from './restaurants.service';
import { createRestaurantDto } from './../dtos/create-restaurant.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  constructor(private readonly RestaurantService: RestaurantService) {}
  @Query((returns) => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.RestaurantService.getAll();
  }
  @Mutation((returns) => Boolean)
  createRestaurant(@Args() createRestaurantDto: createRestaurantDto): boolean {
    return true;
  }
}
