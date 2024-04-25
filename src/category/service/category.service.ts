import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entity/category.entity'
import { CreateCategoryDto, UpdateCategoryDto } from '../dto/category.dto'

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>
    ) { }

    async findAll(): Promise<Category[]> {
        return await this.categoryRepository.find({ relations: ['products'] })
    }

    async findOne(id: number): Promise<Category> {
        const category = await this.categoryRepository.findOne({
            where: { category_id: id },
            relations: ['products']
        })
        if (!category) {
            throw new HttpException(`Categoria não encontrada.`, HttpStatus.NOT_FOUND);
        }
        return category;
    }

    async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
        try {
            return await this.categoryRepository.save(
                this.categoryRepository.create(createCategoryDto)
            );
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new HttpException('Categoria já registrado.', HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException(
                    'Erro ao criar a categoria. Tente novamente mais tarde.',
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
        }
    }

    async update(id: number, updateCategoryDto: UpdateCategoryDto){
        const result = await this.categoryRepository.update(id, updateCategoryDto);
        if (result.affected === 0) {
            throw new HttpException(`Categoria não encontrada.`, HttpStatus.NOT_FOUND);
        }
    }

    async delete(id: number): Promise<void>{
        const result = await this.categoryRepository.delete(id);
        if (result.affected === 0) {
            throw new HttpException(`Categoria não encontrada..`, HttpStatus.NOT_FOUND);
          }
    }
}
