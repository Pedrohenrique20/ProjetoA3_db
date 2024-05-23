import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { DatabaseModule } from '../database/database.module';
import { User } from './entity/user.entity';
import { Filiacao } from '../user/entity/filiacao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { RestaurantAdmins } from 'src/restaurant_admins/entity/restaurant_admins.entity';
import { Reservation } from 'src/reservation/entity/reservation.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([User, Filiacao, RestaurantAdmins, Reservation]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class UserModule {}