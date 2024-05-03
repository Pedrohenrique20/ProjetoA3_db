import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { Product } from 'src/product/product.entity';
import { Menu } from 'src/menu/user/entity/menu.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Category, Product, Menu]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class CategoryModule {}