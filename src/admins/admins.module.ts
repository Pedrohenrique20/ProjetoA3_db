import { Module } from '@nestjs/common';
import { Admins } from './admins.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [
      DatabaseModule,
      TypeOrmModule.forFeature([Admins, Restaurant]),
    ],
    controllers: [AppController],
    providers: [AppService],
  })
export class AdminsModule {}
