import { PartialType } from "@nestjs/mapped-types";
import { IsInt, IsString, Length } from "class-validator";

export class CreateMenuDto {
    
    @IsInt()
    resturant_id: number;

    @IsString()
    @Length(1,40, {message: ' o tamanho minimo do nome é 1 caracter'})
    menu_name: string;

    @IsString()
    @Length(1,255, {message: ' o tamanho minimo do nome é 1 caracter'})
    menu_description: string;

    @IsInt()
    restaurant_id: number;
}

export class UpdateMenuDto extends PartialType(CreateMenuDto) {}