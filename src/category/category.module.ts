import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { Product } from 'src/product/product.entity';
import { Menu } from 'src/menu/entity/menu.entity';
import { ProductMenu } from 'src/product_menu/entity/product_menu.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Category, Product, Menu, ProductMenu, Restaurant]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class CategoryModule {}