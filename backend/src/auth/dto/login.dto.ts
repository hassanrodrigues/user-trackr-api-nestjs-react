import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    default: 'hassanrodrigues14@gmail.com',
  })
  username: string;

  @ApiProperty({
    default: '123456',
  })
  password: string;
}
