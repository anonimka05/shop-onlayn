import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class CategoryClient implements OnModuleInit {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 5001,
        host: 'localhost',
      },
    });
  }
  async onModuleInit() {
    await this.client.connect();
  }

  getAllCategories() {
    return this.client.send('getAllCategories', '');
  }

  createCt(name: string) {
    return this.client.send('createCategory', { name });
  }

  updateCategory(id: number, payload: string) {
    return this.client.send('update', { payload });
  }

  deleteCategory(id: number) {
    return this.client.send('deletaCategory', { id });
  }
}
