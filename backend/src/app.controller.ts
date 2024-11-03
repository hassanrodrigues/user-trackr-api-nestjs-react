import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation } from '@nestjs/swagger';
import { PublicRoute } from './common/decorators/public-route.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @PublicRoute()
  @ApiOperation({ summary: 'First route' })
  getHello(): string {
    return this.appService.getHello();
  }
}
