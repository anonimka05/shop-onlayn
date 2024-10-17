import { Injectable, NotFoundException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ProductClient } from './product.client';
import { CategoryClient } from '../category';

@Injectable()
export class ProductService {
  constructor(
    private productClient: ProductClient,
    private categoryClient: CategoryClient,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const category = await firstValueFrom(
      this.categoryClient.getSingleCategory(createProductDto.categoryId),
    );

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return this.productClient.createProduct(createProductDto);
  }

  findAll() {
    return this.productClient.getAllProducts();
  }
  findOne(id: number) {
    return this.productClient.getSingleProduct(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await firstValueFrom(
      this.productClient.getSingleProduct(id),
    );

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return this.productClient.updateProduct(id, updateProductDto);
  }

  remove(id: number) {
    return this.categoryClient.deleteCategory(id);
  }

  
}
