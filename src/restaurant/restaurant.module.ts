import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/database/database.module';
import { Menu } from 'src/menu/entity/menu.entity';
import { Restaurant } from './restaurant.entity';
import { RestaurantService } from './service/restaurant.service';
import { RestaurantController } from './controller/restaurant.controller';
import { Category } from 'src/category/entity/category.entity';
import { Product } from 'src/product/product.entity';
import { ProductMenu } from 'src/product_menu/entity/product_menu.entity';
import { RestaurantAdmins } from 'src/restaurant_admins/entity/restaurant_admins.entity';
import { Tables } from 'src/table/entity/table.entity';
import { Reservation } from 'src/reservation/entity/reservation.entity';


@Module({
    imports: [
      DatabaseModule,
      TypeOrmModule.forFeature([Restaurant, Menu, Category, Product, ProductMenu, RestaurantAdmins, Tables, Reservation]),
    ],
    controllers: [AppController, RestaurantController],
    providers: [AppService, RestaurantService],
  })
export class RestaurantModule {}
