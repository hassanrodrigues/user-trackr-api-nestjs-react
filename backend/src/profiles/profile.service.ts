import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
  ) {}

  async findProfileByIdentifier(identifier: string) {
    const profile = await this.profileRepository.findOne({
      where: { profile_identifier: identifier },
    });

    return profile.profile_id;
  }
}
