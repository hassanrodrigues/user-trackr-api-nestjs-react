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

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
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
    console.log('aaaa', user_password);

    const user = this.userRepository.create({
      ...createUserDto,
      user_created_at: new Date(),
      user_updated_at: new Date(),
      user_status: true,
      user_deleted: false,
      user_password: user_password,

      profile_id: 1,
    });
    return this.userRepository.save(user);
  }

  async findAll(query: QueryUserDto) {
    let { status, limit, page, sort } = query;
    const { search } = query;

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

    Object.keys(updateUserDto).forEach((key) => {
      if (updateUserDto[key] !== undefined) {
        user[key] = updateUserDto[key];
      }
    });

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
    console.log('id', id);
    const user = await this.getUserById(id);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    user.user_status = !user.user_status;
    user.user_updated_at = new Date();

    console.log(user);

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
      .where('users.user_email = :email', { email })
      .andWhere('users.user_deleted = :deleted', { deleted: false })
      .getOne();
  }
}
