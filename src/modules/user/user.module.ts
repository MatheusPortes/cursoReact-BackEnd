import { Module } from '@nestjs/common';
import { UnitOfWorkModule } from '../unit-of-work/unit-of-work.module';
import { UserController } from './user.controller';
import { UserProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [UnitOfWorkModule],
  controllers: [UserController],
  providers: [UserService, ...UserProviders]
})
export class UserModule {}
