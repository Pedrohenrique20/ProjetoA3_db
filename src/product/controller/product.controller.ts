import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Get()
    async findAll(): Promise<any[]>{
        return this. productService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any>{
        return this.productService.findOne(id);
    }

    @Post()
    async create(@Body() createProductDto: CreateProductDto){
        return this.productService.create(createProductDto)
    }

    @Put(':id')
    async update(
        @Param('id') id : number,
        @Body() updateProductDto: UpdateProductDto
    ): Promise<any>{
        return this.productService.update(id, updateProductDto)
    }

    @Delete(':id')
    async delete(@Param('id')id : number): Promise<void>{
        await  this.productService.delete(id)
    }
}

