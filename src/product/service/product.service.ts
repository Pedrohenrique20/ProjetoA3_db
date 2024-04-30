import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from '../product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ){}

    async findAll(): Promise<Product[]> {
        return  this.productRepository.find();
    }

    async findOne(id: number): Promise<Product>{
        const product = this.productRepository.findOne({where:{product_id: id}});
        if(!product){
            throw new HttpException(`Produto não encontrado.`, HttpStatus.NOT_FOUND);
        }
        return product
    }

    async create(createProductDto : CreateProductDto): Promise<Product>{
        try {
            return await this.productRepository.save(
                this.productRepository.create(createProductDto)
            )
        } catch (error) {   
            if (error.code === 'ER_DUP_ENTRY') {
                throw new HttpException('Produto já registrado.', HttpStatus.BAD_REQUEST);
              } else {
                throw new HttpException(
                  'Erro ao criar o produto. Tente novamente mais tarde.',
                  HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
        }
    } 

    async update(id: number, updateProductDto :UpdateProductDto): Promise<void>{
        const result = await this.productRepository.update(id, updateProductDto);
        if(result.affected === 0) {
            throw new HttpException(`Produto não encontrado.`, HttpStatus.NOT_FOUND);
        }
    }

    async delete( id: number): Promise<void>{
        const result = await this.productRepository.delete(id);
        if(result.affected === 0) {
            throw new HttpException(`Produto não encontrado.`, HttpStatus.NOT_FOUND);
        }
    }

}
