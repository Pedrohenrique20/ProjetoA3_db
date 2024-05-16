import { PartialType } from "@nestjs/mapped-types";
import { IsString, Length } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @Length(1, 240,{ message: 'A descrição deve ter até 240 caracteres' })
    category_description: string;

    @IsString()
    @Length(1, 40,{ message: 'O nome deve ter até 40 caracteres' })
    category_name: string;

    @IsInt()
    restaurant_id: number;

    @IsInt()
    menu_id: number;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto){} 