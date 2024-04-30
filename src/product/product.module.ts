import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { Category } from 'src/category/entity/category.entity';
import { DatabaseModule } from 'src/database/database.module';
import { Product } from './product.entity';
import { ProductService } from './service/product.service';
import { ProductController } from './controller/product.controller';
@Module({
    imports: [
      DatabaseModule,
      TypeOrmModule.forFeature([Category, Product]),
    ],
    controllers: [AppController, ProductController],
    providers: [AppService, ProductService],
  })
export class ProductModule {}
