import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { Category } from 'src/category/entity/category.entity';
import { DatabaseModule } from 'src/database/database.module';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { Menu } from './entity/menu.entity';

@Module({
    imports: [
      DatabaseModule,
      TypeOrmModule.forFeature([Menu, Category, Restaurant]),
    ],
    controllers: [AppController],
    providers: [AppService],
  })
export class MenuModule {}
