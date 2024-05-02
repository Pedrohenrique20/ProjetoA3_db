import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/database/database.module';
import { Menu } from 'src/menu/entity/menu.entity';
import { Restaurant } from './restaurant.entity';


@Module({
    imports: [
      DatabaseModule,
      TypeOrmModule.forFeature([Restaurant, Menu]),
    ],
    controllers: [AppController],
    providers: [AppService],
  })
export class RestaurantModule {}
