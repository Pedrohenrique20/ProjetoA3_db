import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entity/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(user_email: string, senha: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { user_email } });
    if (user && await bcrypt.compare(senha, user.user_password)) {
      const { user_password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id_user };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}