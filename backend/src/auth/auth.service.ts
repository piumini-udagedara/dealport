import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

const DEMO_USER = {
  email: 'admin@dealport.com',
  password: '$2b$10$pdHDs7lnyjyHJf6bXCuMUuDUD31aV6ZQ98UEJwi8NvNwBLdlbmtCq',
  name: 'Admin User',
  role: 'ADMIN',
};

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    if (dto.email === DEMO_USER.email) {
      const valid = await bcrypt.compare(dto.password, DEMO_USER.password);
      if (valid) {
        const payload = { sub: 'demo-admin', email: DEMO_USER.email, role: DEMO_USER.role };
        return {
          accessToken: await this.jwtService.signAsync(payload),
          user: {
            id: 'demo-admin',
            email: DEMO_USER.email,
            name: DEMO_USER.name,
            role: DEMO_USER.role,
          },
        };
      }
    }

    try {
      const user = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });

      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const valid = await bcrypt.compare(dto.password, user.password);
      if (!valid) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const payload = { sub: user.id, email: user.email, role: user.role };
      return {
        accessToken: await this.jwtService.signAsync(payload),
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('Unable to authenticate right now');
    }
  }
}
