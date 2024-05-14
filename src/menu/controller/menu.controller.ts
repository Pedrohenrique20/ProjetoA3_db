import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MenuService } from '../service/menu.service';
import { CreateMenuDto, UpdateMenuDto } from '../dto/menu.dto';

@Controller('menu')
export class MenuController {
    constructor(private readonly menuService: MenuService){}

    @Get()
    async findAll(): Promise<any[]>{
        return this.menuService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
        return this.menuService.findOne(id);
    }

    @Post()
    async create(@Body()createMenuDto : CreateMenuDto ): Promise<any>{
        return this.menuService.create(createMenuDto);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateMenuDto: UpdateMenuDto
    ): Promise <any>{
        return  this.menuService.update(id, updateMenuDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void>{
        return this.menuService.delete(id)
    }
}
