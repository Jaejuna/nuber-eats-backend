import { RestaurantService } from './restaurants.service';
import { createRestaurantDto } from './../dtos/create-restaurant.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';
import { UpdateRestaurantDto } from 'src/dtos/update-restaurant.dto';

@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  constructor(private readonly RestaurantService: RestaurantService) {}
  
  @Query((returns) => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.RestaurantService.getAll();
  }
  
  @Mutation((returns) => Boolean)
  async createRestaurant(@Args('input') createRestaurantDto: createRestaurantDto): Promise<boolean> {
    try{
      await this.RestaurantService.createRestaurant(createRestaurantDto);
      return true;
    }catch(e){
      console.log(e);
      return false;
    }
  }

  @Mutation(returns => Boolean)
  async updateRestaurant(
    @Args('input') updateRestaurantDto: UpdateRestaurantDto
    ): Promise<boolean> {
      try {
        await this.RestaurantService.updateRestaurant(updateRestaurantDto);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
  }
}
