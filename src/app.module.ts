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
import { WaitingLineService } from './services/waiting-line.service';
import { WaitingLineController } from './controllers/waiting-line.controller';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [DatabaseModule,
    UserModule,
    TypeOrmModule.forFeature([User, Filiacao]),
    CategoryModule,
    TypeOrmModule.forFeature([Category, Product]),
    ProductModule,
    RestaurantModule,
    MenuModule
  ],
  controllers: [AppController, CategoryController, WaitingLineController],
  providers: [AppService, CategoryService, WaitingLineService],
})
export class AppModule {}
