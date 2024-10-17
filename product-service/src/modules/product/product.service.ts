import { Product } from './entities';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepo.find();
  }

  async findOne(id: number): Promise<Product | null> {
    return await this.productRepo.findOne({ where: { id } });
  }

  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepo.create({
      name: createProductDto.name,
      descripiton: createProductDto.description,
      price: createProductDto.price,
      count: createProductDto.count,
      rating: createProductDto.rating,
      categoryId: createProductDto.categoryId,
    });

    await this.productRepo.save(newProduct);

    return newProduct;
  }

  async update(updateProduct: UpdateProductDto) {
    const foundedProduct = await this.productRepo.findOne({
      where: { id: updateProduct.id },
    });

    if (!foundedProduct) {
      throw new NotFoundException('Product not found');
    }

    return await this.productRepo.update(
      { id: updateProduct.id },
      {
        name: updateProduct?.name,
        descripiton: updateProduct.description,
        price: updateProduct?.price,
        count: updateProduct?.count,
        rating: updateProduct?.rating,
      },
    );
  }

  async remove(id: number) {
    return await this.productRepo.delete({ id });
  }
}
