import { RestaurantService } from './restaurants.service';
import { Restaurant } from './entities/restaurant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsResolver } from './restaurants.resolver';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  providers: [RestaurantsResolver, RestaurantService],
})
export class RestaurantsModule {}
