import { Injectable } from '@nestjs/common';
import { CategoryClient } from './category.client';

@Injectable()
export class CategoryService {
  constructor(private categoryClient: CategoryClient) {}

  getCategoryList() {
    return this.categoryClient.getAllCategories();
  }

  createCategory(name: string) {
    return this.categoryClient.createCt(name);
  }

  updateCategory(id: number, payload: string) {
    return this.categoryClient.updateCategory(id,payload);
  }

  deleteCategory(id: number) {
    return this.categoryClient.deleteCategory(id);
  }
}
