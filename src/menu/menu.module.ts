import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { Category } from 'src/category/entity/category.entity';
import { DatabaseModule } from 'src/database/database.module';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { Menu } from './entity/menu.entity';
import { MenuController } from './controller/menu.controller';
import { MenuService } from './service/menu.service';
import { ProductMenu } from 'src/product_menu/entity/product_menu.entity';

@Module({
    imports: [
      DatabaseModule,
      TypeOrmModule.forFeature([Menu, Category, Restaurant, ProductMenu]),
    ],
    controllers: [AppController, MenuController],
    providers: [AppService, MenuService],
  })
export class MenuModule {}
