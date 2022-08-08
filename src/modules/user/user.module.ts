import { Module } from '@nestjs/common';
import { PersonModule } from '../person/person.module';
import { UserController } from './user.controller';
import { UserProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [PersonModule],
  controllers: [UserController],
  providers: [UserService, ...UserProviders]
})
export class UserModule {}
