import { ApiProperty } from '@nestjs/swagger';
import { FilterPagination } from 'src/common/utils/filter.pagination';

export class QueryUserDto extends FilterPagination {
  @ApiProperty({ nullable: true, required: false })
  search: string;

  @ApiProperty({ nullable: true, required: false })
  status: boolean;
}
