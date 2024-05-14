import { PartialType } from "@nestjs/mapped-types";
import { IsInt } from "class-validator";

export class CreateMenuDto {
    
    @IsInt()
    resturant_id: number;
}

export class UpdateMenuDto extends PartialType(CreateMenuDto) {}