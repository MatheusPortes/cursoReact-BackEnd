import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common'
import { Person } from 'src/entities/Person.entity'
import { CreatePersonDTO } from './DTOs/creste.dto'
import { PatchPersonDTO } from './DTOs/patch.dto'
import { PutPersonDTO } from './DTOs/put.dto'
import { PersonService } from './person.service'

@Controller('person')
export class PersonController {
    constructor(private personService: PersonService) {}

    @Get(':CPF')
    async searchPersonByCPF(@Param('CPF') CPF: string): Promise<Person> {
        return await this.personService.searchPersonByCPF(CPF)
    }

    @Post()
    async create(@Body() params: CreatePersonDTO) {
        await this.personService.CreatePerson(params)
    }

    @Put(':id')
    async put(
        @Param('id') id_user: number,
        @Body() params: PutPersonDTO
    ): Promise<void> {
        await this.personService.putPerson(id_user, params)
    }

    @Patch(':id')
    async patch(
        @Param('id') id_user: number,
        @Body() params: PatchPersonDTO
    ): Promise<void> {
        await this.personService.patchPerson(id_user, params)
    }
}
