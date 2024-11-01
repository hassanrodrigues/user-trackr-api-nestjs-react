import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProfileEntity } from './entities/profile.entity';
import { ProfileService } from './profile.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity])],
  controllers: [],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfilesModule {}
