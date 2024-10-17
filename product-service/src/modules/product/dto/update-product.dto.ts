import { IsNumber, IsPositive } from 'class-validator';
import { CreateProductDto } from './create-product.dto';
import { OmitType, PartialType } from '@nestjs/mapped-types';

export class UpdateProductDto extends OmitType(PartialType(CreateProductDto), [
  'categoryId',
]) {
  @IsNumber()
  @IsPositive()
  id: number;
}
