import { PartialType } from "@nestjs/mapped-types";
import { IsInt, IsNumber, IsString, Length, isInt } from "class-validator";

export class CreateProductDto {
    @IsNumber()    
    product_price: number;

    @IsString()
    @Length(2, 40, { message: 'o tamanho minimo do nome é 2 caracteres' })
    product_name: string;

    @IsString()
    @Length(2, 255, { message: 'o tamanho minimo da descrição é  de 2 caracteres e no máximo 240' })
    product_description: string;

    @IsInt()
    category_id: number;

    @IsInt()
    restaurant_id: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto){}