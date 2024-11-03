import { ApiProperty } from '@nestjs/swagger';

export class FirstAccessDto {
  @ApiProperty()
  new_password: string;

  @ApiProperty()
  confirmation_password: string;
}
