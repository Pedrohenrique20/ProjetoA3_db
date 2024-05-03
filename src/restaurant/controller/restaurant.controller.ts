import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RestaurantService } from '../service/restaurant.service';
import { CreateRestaurantDto, UpdateRestaurantDto } from '../dto/restaurant.dto';

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService){}

    @Get()
    async findAll(): Promise<any[]>{
        return this.restaurantService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
        return this.restaurantService.findOne(id)
    }

    @Post()
    async create(@Body() createRestaurantDto: CreateRestaurantDto): Promise<any> {
        return this.restaurantService.create(createRestaurantDto);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateRestaurantDto: UpdateRestaurantDto
    ): Promise<any> {
        return this.restaurantService.update(id, updateRestaurantDto)
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void>{
        return this.restaurantService.delete(id)
    }
}
