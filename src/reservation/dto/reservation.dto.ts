import { PartialType } from "@nestjs/mapped-types";
import { IsDate, IsInt, IsNumber, IsString, Length, Max, Min } from "class-validator";

export class CreateProjetoDto {
  
  

  @IsDate()
  reservation_date: Date;

  @IsNumber()
  reservation_number_of_people: number;

  @IsNumber()
  restaurant_id: number;

  @IsNumber()
  user_id: number;

  @IsNumber()
  table_id: number;


}

export class UpdateProjetoDto extends PartialType(CreateProjetoDto) {}