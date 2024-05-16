import { IsEmail, IsString, Length, Matches, IsNumber, IsEnum } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { UserRole } from '../entity/UserRole';



export class CreateUserDto {
  @IsString()
  @Length(2, 40, { message: 'o tamanho minimo do nome é 2 caracteres' })
  user_name: string;

  @IsEmail()
  @Length(6, 40, { message: 'o tamanho minimo do e-mail é 6 caracteres' })
  user_email: string;

  @IsNumber()
  @Length(9, 15, { message: 'o tamanho minimo do telefone é 9 caracteres' })
  user_tel: number;

  @IsString()
  @Length(9, 40, { message: 'o tamanho minimo do endereço é 9 caracteres' })
  user_adress: string;

  @IsString()
  @Length(3, 40, { message: 'o tamanho minimo da cidade é 3 caracteres' })
  user_city: string;

  @IsString()
  @Length(8, 40, { message: 'o tamanho minimo do distrito é 3 caracteres' })
  user_district: string;

  @IsString()
  @Length(4, 40, { message: 'o tamanho minimo do estado é 4 caracteres' })

  @IsEnum(UserRole, { message: 'o valor deve ser um dos roles definidos' })
  is_admin: UserRole;


  






  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
    message:
      'a senha deve ter pelo menos 8 caracteres, incluindo uma pelo menos: uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
  })
  user_password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}