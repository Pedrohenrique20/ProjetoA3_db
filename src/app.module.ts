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
<<<<<<< HEAD
=======
import { AdminsModule } from './admins/admins.module'
>>>>>>> parent of f64e3be (Crud de Restaurante feito)

@Module({
  imports: [DatabaseModule,
    UserModule,
    TypeOrmModule.forFeature([User, Filiacao, Product, Restaurant, Category, Menu]),
    CategoryModule,
    ProductModule,
    RestaurantModule,
    MenuModule
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService, CategoryService],
})
export class AppModule {}
