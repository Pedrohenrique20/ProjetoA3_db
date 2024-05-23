import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { Category } from 'src/category/entity/category.entity';
import { DatabaseModule } from 'src/database/database.module';
import { Menu } from 'src/menu/entity/menu.entity';
import { Product } from 'src/product/product.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { ProductMenu } from './entity/product_menu.entity';

@Module({
    imports: [
      DatabaseModule,
      TypeOrmModule.forFeature([Category, Product, Menu, Restaurant, ProductMenu]),
    ],
    controllers: [AppController],
    providers: [AppService],
  })
export class ProductMenuModule {}
