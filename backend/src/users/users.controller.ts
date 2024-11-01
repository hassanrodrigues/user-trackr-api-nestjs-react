import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryUserDto } from './dto/query-user.dto';
import { PermissionGuard } from 'src/auth/shared/guards/permission.guard';
import { UserPermissions } from 'src/common/utils/Enuns';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiBearerAuth()
  @UseGuards(PermissionGuard(UserPermissions.CREATE))
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiBearerAuth()
  @UseGuards(PermissionGuard(UserPermissions.FIND_ALL))
  async findAll(@Query() query: QueryUserDto) {
    return this.usersService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiBearerAuth()
  @UseGuards(PermissionGuard(UserPermissions.FIND_ALL))
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user by id' })
  @ApiBearerAuth()
  @UseGuards(PermissionGuard(UserPermissions.FIND_ALL))
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by id' })
  @ApiBearerAuth()
  @UseGuards(PermissionGuard(UserPermissions.CREATE))
  async remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Patch('change-status/:id')
  @ApiOperation({ summary: 'Change user status' })
  @ApiBearerAuth()
  @UseGuards(PermissionGuard(UserPermissions.CREATE))
  async changeStatus(@Param('id') id: string) {
    return this.usersService.changeStatus(+id);
  }
}
