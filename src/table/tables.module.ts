import { Module } from '@nestjs/common';
import { Tables } from './entity/table.entity';
import { Reservation } from 'src/reservation/entity/reservation.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [
      DatabaseModule,
      TypeOrmModule.forFeature([Tables, Reservation, Restaurant]),
    ],
    controllers: [AppController],
    providers: [AppService],
  })
export class TablesModule {}
