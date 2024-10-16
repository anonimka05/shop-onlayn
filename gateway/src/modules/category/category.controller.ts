import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto, UpdateCategoryDto } from './dtos';

@ApiTags('Category')
@Controller('categories')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Get()
  getCategories() {
    return this.service.getCategoryList();
  }

  @Post('/add')
  createCategory(@Body() payload: CreateCategoryDto) {
    return this.service.createCategory(payload.name);
  }

  @Put('/update/:id')
  updateCategory(@Param('id', ParseIntPipe) id: number, payload: UpdateCategoryDto) {
    return this.updateCategory(id, payload);
  }

  @Delete('/:id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.service.deleteCategory(id);
  }
}
