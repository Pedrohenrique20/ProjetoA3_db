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
import { Restaurant } from './restaurant/restaurant.entity';


import { AdminsModule } from './admins/admins.module'
import { Admins } from './admins/admins.entity';
import { RestaurantController } from './restaurant/controller/restaurant.controller';
import { RestaurantService } from './restaurant/service/restaurant.service';


@Module({
  imports: [DatabaseModule,
    UserModule,
    TypeOrmModule.forFeature([User, Filiacao, Product, Restaurant, Category,Admins]),
    CategoryModule,
    ProductModule,
    RestaurantModule,
    AdminsModule
  ],
  controllers: [AppController, CategoryController, RestaurantController],
  providers: [AppService, CategoryService, RestaurantService],
})
export class AppModule {}
