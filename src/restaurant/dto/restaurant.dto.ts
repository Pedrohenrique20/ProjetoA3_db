import { PartialType } from "@nestjs/mapped-types";
import {IsInt, IsString, Length } from "class-validator";

export class CreateRestaurantDto {
    @IsString()
    @Length(1, 20, {message: 'o tamanho máximo do nome é 20 caracteres'})
    restaurant_name: string;

    @IsString()
    @Length(1,255, {message: 'o tamanho máximo do nome é 8 caracteres'})
    restaurant_description: string;

    @IsString()
    @Length(2, 40, {message: 'o tamanho máximo do endereço é 40 caracteres' })
    restaurant_address: string;

    @IsInt()
    @Length(9, 15, {message: 'o tamanho máximo do endereço é 15 caracteres e o mínimo 9' })
    restaurant_tel: number; 
    
}

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto){}