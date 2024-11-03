import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'Hassan',
  })
  user_name: string;

  @ApiProperty({
    default: 'Rodrigues',
  })
  user_surname: string;

  @ApiProperty({
    enum: ['adm', 'usr'],
    default: 'usr',
  })
  profile: string;

  // @ApiProperty({
  //   default: true,
  // })
  // user_password: string;

  @ApiProperty({
    default: 'hassanrodriguesteste@gmail.com',
  })
  user_email: string;
}
