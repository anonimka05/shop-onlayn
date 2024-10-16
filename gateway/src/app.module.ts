import { Module } from '@nestjs/common';
import {
  CategoryModule,
} from './modules/category';

@Module({
  imports: [CategoryModule],
})
export class AppModule {}
