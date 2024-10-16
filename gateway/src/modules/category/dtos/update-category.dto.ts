import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiProperty({
    type: 'string',
    example: 'Kitoblar',
  })
  name: string;
}
