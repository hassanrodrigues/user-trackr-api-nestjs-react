import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from 'src/config/environments/config.module';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { ProfileEntity } from 'src/profiles/entities/profile.entity';
import { ProfilesModule } from 'src/profiles/profiles.module';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './shared/strategies/local.strategy';
import { JwtStrategy } from './shared/strategies/jwt.strategy';
import { JwtRefreshStrategy } from './shared/strategies/jwt-refresh.strategy';
import { JwtFirstAccessStrategy } from './shared/strategies/jwt-first-access.strategy';
import { JwtForgotPasswordStrategy } from './shared/strategies/jwt-forgot-password.strategy';

@Module({
  imports: [
    ConfigModule,
    UsersModule,
    TypeOrmModule.forFeature([UserEntity, ProfileEntity]),
    ProfilesModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    JwtRefreshStrategy,
    JwtForgotPasswordStrategy,
    JwtFirstAccessStrategy,
  ],
})
export class AuthModule {}
