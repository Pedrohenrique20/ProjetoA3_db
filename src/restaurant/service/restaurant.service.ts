import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from '../restaurant.entity';
import { Repository } from 'typeorm';
import { CreateRestaurantDto, UpdateRestaurantDto } from '../dto/restaurant.dto';

@Injectable()
export class RestaurantService {
    constructor(
        @InjectRepository(Restaurant)
        private restaurantRepository : Repository<Restaurant>
    ){}

    async findAll(): Promise<Restaurant[]> {
        return await this.restaurantRepository.find({ relations: ['menu', 'admins']})
    }

    async findOne(id: number): Promise<Restaurant> {
        const restaurant = await this.restaurantRepository.findOne({
            where: { restaurant_id: id },
            relations: ['menu', 'admins']
        })
        if(!restaurant){
            throw new HttpException(`Restaurante não encontrado.`, HttpStatus.NOT_FOUND);
        }
        return restaurant;
    }

    async create(createRestaurantDto :CreateRestaurantDto): Promise<Restaurant>{
        try {
            return await this.restaurantRepository.save(
                this.restaurantRepository.create(createRestaurantDto)
            )
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new HttpException('Restaurante já registrado.', HttpStatus.BAD_REQUEST);
              } else {
                throw new HttpException(
                  'Erro ao criar o restaurante. Tente novamente mais tarde.',
                  HttpStatus.INTERNAL_SERVER_ERROR,
                );
              }
        }
    }

    async update(id: number, updateRestaurantDto :UpdateRestaurantDto): Promise<void>{
        const result = await this.restaurantRepository.update(id, updateRestaurantDto);
        if (result.affected === 0) {
            throw new HttpException(`Restaurante não encontrado.`, HttpStatus.NOT_FOUND);
        }
    }

    async delete(id: number): Promise<void>{
        const result = await this.restaurantRepository.delete(id);
        if (result.affected === 0) {
            throw new HttpException(`Restaurante não encontrado.`, HttpStatus.NOT_FOUND);
        }
    }
}
