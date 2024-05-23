import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/database/database.module';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { Tables } from 'src/table/entity/table.entity';
import { User } from 'src/user/entity/user.entity';
import { Reservation } from './entity/reservation.entity';

@Module({
    imports: [
      DatabaseModule,
      TypeOrmModule.forFeature([Restaurant, User, Tables, Reservation]),
    ],
    controllers: [AppController],
    providers: [AppService],
  })
export class ReservationModule {}
