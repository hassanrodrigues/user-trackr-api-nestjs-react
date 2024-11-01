import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/environments/config.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './config/database/database.module';

@Module({
  imports: [ConfigModule, UsersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
