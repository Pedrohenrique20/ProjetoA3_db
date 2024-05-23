import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/database/database.module';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { User } from 'src/user/entity/user.entity';
import { RestaurantAdmins } from './entity/restaurant_admins.entity';

@Module({
    imports: [
      DatabaseModule,
      TypeOrmModule.forFeature([RestaurantAdmins , Restaurant, User]),
    ],
    controllers: [AppController],
    providers: [AppService],
  })
export class RestaurantAdminsModule {}
