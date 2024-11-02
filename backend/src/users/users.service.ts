import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Brackets, Repository } from 'typeorm';
import { BadRequestException } from 'src/common/exception-filters/bad-request.exception';
import { FiedlsValidate } from 'src/common/utils/fields.validate';
import { hash } from 'src/common/utils/hash';
import { QueryUserDto } from './dto/query-user.dto';
import { paginate } from 'nestjs-typeorm-paginate';
import { passForUser } from 'src/common/utils/date_pass';
import { ProfileService } from 'src/profiles/profile.service';
import { ProfileEntity } from 'src/profiles/entities/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly profileService: ProfileService,
  ) {}

  fieldsValidate = FiedlsValidate.getInstance();
  async create(createUserDto: CreateUserDto) {
    const emailExists = await this.userRepository.findOne({
      where: { user_email: createUserDto.user_email },
    });

    if (emailExists) {
      throw new BadRequestException('Email already exists');
    }

    this.fieldsValidate.getValidateUserName(createUserDto.user_name);
    this.fieldsValidate.getValidateUserEmail(createUserDto.user_email);

    const user_password = await hash(passForUser());

    const profileId = await this.profileService.findProfileByIdentifier(
      createUserDto?.profile,
    );

    const user = this.userRepository.create({
      user_email: createUserDto.user_email,
      user_name: createUserDto.user_name,
      user_surname: createUserDto.user_surname,
      profile: { profile_id: profileId },
      user_created_at: new Date(),
      user_updated_at: new Date(),
      user_status: true,
      user_deleted: false,
      user_password: user_password,
      profile_id: 1,
      user_first_access: true,
    });
    return this.userRepository.save(user);
  }

  async findAll(query: QueryUserDto) {
    let { limit, page } = query;
    const { search, status, sort } = query;

    limit = limit || 10;
    page = page || 1;

    const queryUsers = this.userRepository
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.profile', 'profile');

    queryUsers.where('users.user_deleted = :deleted', { deleted: false });

    if (search) {
      queryUsers.andWhere(
        new Brackets((queryBuilderOne) => {
          queryBuilderOne
            .where('users.user_name ilike :search', {
              search: `%${search}%`,
            })
            .orWhere('users.user_email ilike :search', {
              search: `%${search}%`,
            });
        }),
      );
    }

    if (sort === 'ASC' || sort === 'DESC') {
      queryUsers.orderBy('users.user_name', sort);
    }

    if (status !== undefined) {
      queryUsers.andWhere('users.user_status = :status', { status });
    }

    if (sort) {
      queryUsers.orderBy('users.user_name', sort as 'ASC' | 'DESC');
    }

    const allUsersPaginate = await paginate<UserEntity>(queryUsers, {
      page,
      limit,
    });

    return allUsersPaginate;
  }

  async findOne(id: number) {
    const user = await this.getUserById(id);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.getUserById(id);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    if (updateUserDto.user_email) {
      const emailExists = await this.getByEmail(updateUserDto.user_email);
      if (emailExists && emailExists.user_id !== id) {
        throw new BadRequestException('Email already exists');
      }
    }

    Object.keys(updateUserDto).forEach((key) => {
      if (updateUserDto[key] !== undefined) {
        user[key] = updateUserDto[key];
      }
    });

    user.user_updated_at = new Date();

    if (updateUserDto.profile) {
      const profileId: number =
        await this.profileService.findProfileByIdentifier(
          updateUserDto.profile,
        );

      if (!profileId) {
        throw new BadRequestException('Profile not found');
      }
      user.profile_id = profileId;
      user.profile = { profile_id: profileId } as ProfileEntity;
    }

    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.getUserById(id);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    user.user_deleted = true;
    user.user_updated_at = new Date();

    return this.userRepository.save(user);
  }

  async changeStatus(id: number) {
    const user = await this.getUserById(id);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    user.user_status = !user.user_status;
    user.user_updated_at = new Date();

    await this.userRepository.save(user);

    return {
      message: 'Status changed successfully',
    };
  }

  async getUserById(id: number) {
    return this.userRepository
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.profile', 'profile')
      .where('users.user_id = :id', { id })
      .andWhere('users.user_deleted = :deleted', { deleted: false })
      .getOne();
  }

  async getByEmail(email: string) {
    return this.userRepository
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.profile', 'profile')
      .where('users.user_email = :email', { email })
      .andWhere('users.user_deleted = :deleted', { deleted: false })
      .getOne();
  }

  async updateRefreshToken(id: number, refresh_token: string) {
    return this.userRepository
      .createQueryBuilder()
      .update(UserEntity)
      .set({ user_refresh_token: refresh_token })
      .where('user_id = :id', { id })
      .execute();
  }
}
