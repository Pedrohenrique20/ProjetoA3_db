import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Filiacao } from './user/entity/filiacao.entity';
import { User } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { CategoryService } from './category/service/category.service';
import { CategoryController } from './category/controller/category.controller';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entity/category.entity';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MenuModule } from './menu/menu.module';
import { Restaurant } from './restaurant/restaurant.entity';
import { Menu } from './menu/entity/menu.entity';
import { RestaurantController } from './restaurant/controller/restaurant.controller';
import { RestaurantService } from './restaurant/service/restaurant.service';
import { AuthModule } from './auth/auth.module';
import { ProductMenuModule } from './product_menu/product_menu.module';
import { ReservationModule } from './reservation/reservation.module';
import { RestaurantAdminsModule } from './restaurant_admins/restaurant_admins.module';
import { TablesModule } from './table/tables.module';

@Module({
  imports: [DatabaseModule,
    UserModule,
    TypeOrmModule.forFeature([User, Filiacao, Product, Restaurant, Category, Menu]),
    CategoryModule,
    ProductModule,
    RestaurantModule,
    MenuModule,
    AuthModule,
    ProductMenuModule,
    ReservationModule,
    RestaurantAdminsModule,
    TablesModule
  ],
  controllers: [AppController, CategoryController, RestaurantController],
  providers: [AppService, CategoryService, RestaurantService],
})
export class AppModule {}
