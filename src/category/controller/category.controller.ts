import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../dto/category.dto'
import { CategoryService} from '../service/category.service'

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}

    @Get()
    async findAll(): Promise<any[]> {
        return this.categoryService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number){
        return this.categoryService.findOne(id);
    }

    @Post()
    async create(@Body() createCategoryDto: CreateCategoryDto):  Promise<any>{
        return this.categoryService.create(createCategoryDto)
    }

    @Put(':id')
    async update(
        @Param('id')id : number,
        @Body() updateCategoryDto: UpdateCategoryDto
    ): Promise<any>{
        return this.categoryService.update(id, updateCategoryDto)
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void>{
        this.categoryService.delete(id);
    }
}
