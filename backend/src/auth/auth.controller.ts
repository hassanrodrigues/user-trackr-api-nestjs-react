import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { PublicRoute } from 'src/common/decorators/public-route.decorator';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './shared/guards/local-auth.guard';
import { JwtAuthGuard } from './shared/guards/jwt-auth.guard';

import { JwtRefreshAuthGuard } from './shared/guards/jwt-refresh-auth.guard';
import { JwtFirstAccessAuthGuard } from './shared/guards/jwt-first-access.guard';
import { FirstAccessDto } from './dto/first-access.dto';
import { ChangePasswordDto } from './dto/change-pass.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @PublicRoute()
  @ApiOperation({ summary: 'Login' })
  @UseGuards(LocalAuthGuard)
  async auth(@Request() request: any, @Body() auth: LoginDto) {
    return this.authService.generateToken(
      request?.user?.has_private_permission,
      auth,
    );
  }

  @Post('/logout')
  @ApiOperation({ summary: 'Logout' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async logout(@Request() request: any) {
    return this.authService.removeRefreshToken(request?.user?.sub);
  }

  @Post('/refresh_token')
  @ApiOperation({ summary: 'Refresh token' })
  @PublicRoute()
  @ApiBearerAuth()
  @UseGuards(JwtRefreshAuthGuard)
  async refreshToken(@Request() payload: any) {
    return this.authService.refreshToken(
      payload?.user?.has_private_permission,
      payload?.user?.sub,
      payload?.user?.refresh_token,
    );
  }

  @Post('/first_access')
  @ApiBearerAuth()
  @PublicRoute()
  @UseGuards(JwtFirstAccessAuthGuard)
  async firstAccess(
    @Request() payload: any,
    @Body() firstAccessDto: FirstAccessDto,
  ) {
    return this.authService.firstAccess(payload?.user?.sub, firstAccessDto);
  }

  @Post('/change_password')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async changePassword(
    @Request() req: any,
    @Body() changePass: ChangePasswordDto,
  ) {
    return this.authService.changePassword(req?.user?.sub, changePass);
  }
}
