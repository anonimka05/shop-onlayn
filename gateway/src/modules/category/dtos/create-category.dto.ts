import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty({
        type: 'string',
        example: 'Kitoblar'
    })
    name: string
}