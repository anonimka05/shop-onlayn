import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @MessagePattern('getAllCategories')
  findAll() {
    return this.categoryService.findAll();
  }

  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
