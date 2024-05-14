import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from '../entity/menu.entity';
import { CreateMenuDto, UpdateMenuDto } from '../dto/menu.dto';

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(Menu)
        private menuRepository: Repository<Menu>
    ) { }

    async findAll(): Promise<Menu[]> {
        return await this.menuRepository.find({ relations: ['restaurant', 'categories', 'products'] });
    }

    async findOne(id: number): Promise<Menu> {
        const menu = this.menuRepository.findOne({
            where: { menu_id: id },
            relations: ['restaurant', 'categories', 'products']
        }
        )

        if (!menu) {
            throw new HttpException(`Menu não encontrado.`, HttpStatus.NOT_FOUND);
        }
        return menu;
    }

    async create(createMenuDto: CreateMenuDto): Promise<Menu> {
        try {
            return await this.menuRepository.save(
                this.menuRepository.create(createMenuDto)
            )
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new HttpException('O restaurante já possui um menu.', HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException(
                    'Erro ao criar o registro. Tente novamente mais tarde.',
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
        }
    }
    
    async update( id: number, updateMenuDto: UpdateMenuDto): Promise<void>{
        const result= await this.menuRepository.update(id, updateMenuDto);
        if (result.affected === 0) {
            throw new HttpException(`Menu não encontrado.`, HttpStatus.NOT_FOUND);
          }
    }

    async delete( id: number): Promise<void>{
        const result= await this.menuRepository.delete(id);
        if (result.affected === 0) {
            throw new HttpException(`Menu não encontrado.`, HttpStatus.NOT_FOUND);
          }
    }


}