import { Module } from '@nestjs/common';
import { UserServiceController } from './user-service.controller';
import { UserServiceClass } from './user-service.service';

@Module({
  controllers: [UserServiceController],
  providers: [UserServiceClass],
})
export class UserServiceModule {}
