import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from '../../entities/Person.entity';
import { CreatePersonDTO } from './DTOs/creste.dto';

@Injectable()
export class PersonService {
    constructor(
        @Inject('PERSON_REPOSITORY')
        private addressRepository: Repository<Person>,
    ) {}

    async CreatePerson(params: CreatePersonDTO) {
        await this.addressRepository.save(params)
    }
}
