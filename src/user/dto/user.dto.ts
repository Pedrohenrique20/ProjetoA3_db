import { IsEmail, IsString, Length, Matches } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @Length(2, 40, { message: 'o tamanho minimo do nome é 2 caracteres' })
  user_name: string;

  @IsEmail()
  @Length(6, 40, { message: 'o tamanho minimo do e-mail é 6 caracteres' })
  user_email: string;

  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
    message:
      'a senha deve ter pelo menos 8 caracteres, incluindo uma pelo menos: uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
  })
  user_password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}