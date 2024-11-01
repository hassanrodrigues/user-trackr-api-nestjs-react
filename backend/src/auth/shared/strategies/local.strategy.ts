import { Unauthorized } from './../../../common/exception-filters/unauthorized.exception';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { VerifyCredentials } from 'src/common/utils/Enuns';
import { AuthService } from '../../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({
      usernameField: VerifyCredentials.verifyUsername,
      passwordField: VerifyCredentials.verifyPassword,
    });
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new Unauthorized(
        "Data doesn't match our records. Please check your email and password.",
      );
    }

    return user;
  }
}
