import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonProviders } from './person.providers';
import { PersonService } from './person.service';

@Module({
  controllers: [PersonController],
  providers: [PersonService, ...PersonProviders],
  exports: [PersonService]
})
export class PersonModule {}
