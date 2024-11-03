import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
  @ApiProperty()
  new_password: string;

  @ApiProperty()
  confirmation_password: string;
}
