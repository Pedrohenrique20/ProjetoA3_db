export class TableDto {}
import { PartialType } from "@nestjs/mapped-types";
import { IsInt, IsString, Length, Max, Min } from "class-validator";
export class CreateTableDto { 
    
    @IsInt()
    table_number: number;

    @IsInt() 
    table_capacity: number;

    @IsString()
    @Length(1,255, {message: 'o tamanho máximo é de 255 caracteres'})
    table_details: string

    @IsInt()
    restaurant_id: number;
    }
  
export class UpdateTableDto extends PartialType(CreateTableDto) {}