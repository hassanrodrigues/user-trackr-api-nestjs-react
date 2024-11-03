import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Unauthorized } from './../common/exception-filters/unauthorized.exception';
import { hash, isMatchHash } from 'src/common/utils/hash';
import { LoginDto } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { FirstAccessDto } from './dto/first-access.dto';
import { BadRequestException } from 'src/common/exception-filters/bad-request.exception';
import { ChangePasswordDto } from './dto/change-pass.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly userService: UsersService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.getByEmail(username);

    if (!user || user.user_deleted) {
      throw new Unauthorized(
        'Dados de acesso inválidos. Verifique seu e-mail e senha e tente novamente.',
      );
    }

    if (!user.user_status) {
      throw new Unauthorized(
        'Sua conta está desativada. Entre em contato com o administrador.',
      );
    }

    if (username.toLowerCase() === user.user_email.toLowerCase() && password) {
      const hashPassword = await isMatchHash(password, user.user_password);

      if (user && hashPassword) {
        return {
          user: user,
          has_private_permission: true,
        };
      }
    } else {
      return null;
    }
  }

  async generateToken(has_private_permission: boolean, auth: LoginDto) {
    const user = await this.userService.getByEmail(auth.username);

    const profiles = this.getProfiles(user);

    const { access_token, refresh_token } = await this.getTokens(
      user.user_id,
      user.user_email,
      user.user_name,
      profiles,
      has_private_permission,
    );

    // if (user.user_first_access) {
    //   return {
    //     first_access_token: first_access_token,
    //     expires_in: this.configService.get('auth.token_expires_in'),
    //     sub: user.user_id,
    //     username: user.user_email,
    //     name: user.user_name,
    //   };
    // }

    const hashed_refresh_token = await hash(refresh_token);

    await this.userService.updateRefreshToken(
      user.user_id,
      hashed_refresh_token,
    );

    return {
      access_token: access_token,
      refresh_token: refresh_token,
      expires_in: this.configService.get('auth.token_expires_in'),
      sub: user.user_id,
      username: user.user_email,
      name: user.user_name,
      email: user.user_email,
      profile: user.profile.profile_name,
    };
  }
  async refreshToken(
    has_private_permission: boolean,
    sub: number,
    old_refresh_Token: string,
  ) {
    const getById = await this.userService.getUserById(sub);

    const user = await this.userService.getByEmail(getById.user_email);

    if (!user) {
      throw new HttpException(
        'User with this id does not exist',
        HttpStatus.NOT_FOUND,
      );
    }

    if (!user?.user_refresh_token) {
      throw new HttpException(
        'Refresh token does not exist on this user',
        HttpStatus.NOT_FOUND,
      );
    }

    const verifyIfMatchHash = await isMatchHash(
      old_refresh_Token,
      user?.user_refresh_token,
    );

    if (!verifyIfMatchHash) {
      throw new HttpException(
        'Refresh token does not match',
        HttpStatus.NOT_FOUND,
      );
    }

    const profiles = this.getProfiles(user);

    const { access_token, refresh_token } = await this.getTokens(
      user.user_id,
      user.user_email,
      user.user_name,
      profiles,
      has_private_permission,
    );

    const hashed_refresh_token = await hash(refresh_token);

    await this.userService.updateRefreshToken(
      user.user_id,
      hashed_refresh_token,
    );

    return {
      access_token: access_token,
      refresh_token: refresh_token,
      expires_in: this.configService.get('auth.token_expires_in'),
      sub: user.user_id,
      username: user.user_email,
      name: user.user_name,
      email: user.user_email,
      profile: user.profile?.profile_name,
    };
  }

  async removeRefreshToken(id: number) {
    const user = await this.userService.getUserById(id);

    if (!user) {
      throw new HttpException(
        'User with this id does not exist',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.userService.updateRefreshToken(user.user_id, null);
  }

  async getTokens(
    sub: number,
    username?: string,
    name?: string,
    profile?: string[],
    has_private_permission?: boolean,
  ) {
    const [access_token, refresh_token, first_access_token] = await Promise.all(
      [
        this.jwtService.signAsync(
          {
            sub: sub,
            username: username,
            name: name,
            profile: profile,
          },
          {
            secret: this.configService.get('auth.token_secret'),
            expiresIn: this.configService.get('auth.token_expires_in'),
            algorithm: 'HS256',
          },
        ),
        this.jwtService.signAsync(
          {
            sub: sub,
            username: username,
            has_private_permission: has_private_permission,
          },
          {
            secret: this.configService.get('auth.refresh_token_secret'),
            expiresIn: this.configService.get('auth.refresh_token_expires_in'),
            algorithm: 'HS256',
          },
        ),

        this.jwtService.signAsync(
          {
            sub: sub,
            username: username,
            has_private_permission: has_private_permission,
          },
          {
            secret: this.configService.get('auth.first_access_token_secret'),
            expiresIn: this.configService.get(
              'auth.first_access_token_expires_in',
            ),
            algorithm: 'HS256',
          },
        ),
      ],
    );
    return {
      access_token: access_token,
      refresh_token: refresh_token,
      first_access_token: first_access_token,
    };
  }

  getProfiles(user: any) {
    const profiles: string[] = [];

    profiles.push(user.profile.profile_name);

    return profiles;
  }

  async firstAccess(sub: number, firstAccessDto: FirstAccessDto) {
    const { new_password, confirmation_password } = firstAccessDto;

    const userSaved = await this.userService.getUserById(sub);

    if (!userSaved.user_first_access) {
      throw new BadRequestException('Senha já foi alterada.');
    }

    if (!userSaved) {
      throw new BadRequestException('Usuário não encontrado');
    }

    return this.userService.updatePassword(
      userSaved.user_id,
      {
        new_password: new_password,
        confirmation_password: confirmation_password,
      },
      userSaved.user_email,
    );
  }

  async changePassword(sub: number, changePass: ChangePasswordDto) {
    const { new_password, confirmation_password } = changePass;

    const userSaved = await this.userService.getUserById(sub);

    if (!userSaved) {
      throw new BadRequestException('Usuário não encontrado');
    }

    return this.userService.updatePassword(
      userSaved.user_id,
      {
        new_password: new_password,
        confirmation_password: confirmation_password,
      },
      userSaved.user_email,
    );
  }
}
