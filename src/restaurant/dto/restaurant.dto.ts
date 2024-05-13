import { PartialType } from "@nestjs/mapped-types";
import { IsString, Length } from "class-validator";

export class CreateRestaurantDto {
    @IsString()
    @Length(1, 20, {message: 'o tamanho máximo do nome é 20 caracteres'})
    name: string;

    @IsString()
    @Length(1,240, {message: 'o tamanho máximo do nome é 8 caracteres'})
    description: string;

    @IsString()
    @Length(2, 40, {message: 'o tamanho máximo do endereço é 40 caracteres' })
    address: string;
    
}

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto){}