import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, Length} from "class-validator";

export class CreateProjetoDto {
  @IsNumber()
  restaurant_id: number;

  @IsNumber()
  category_id: number;

  @IsNumber()
  product_id: number;

  @IsNumber()
  menu_id: number;

}

export class UpdateProjetoDto extends PartialType(CreateProjetoDto) {}