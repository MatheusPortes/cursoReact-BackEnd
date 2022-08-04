import { Body, Controller, Post } from '@nestjs/common'
import { CreatePersonDTO } from './DTOs/creste.dto'
import { PersonService } from './person.service'

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Post()
  async create(@Body() params: CreatePersonDTO) {
    await this.personService.CreatePerson(params)
  }
}
