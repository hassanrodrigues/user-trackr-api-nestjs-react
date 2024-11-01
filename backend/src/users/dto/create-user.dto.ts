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
    default: 1,
  })
  profile_id: number;

  @ApiProperty({
    default: true,
  })
  user_password: string;

  @ApiProperty({
    default: 'hassanrodriguesteste@gmail.com',
  })
  user_email: string;
}
