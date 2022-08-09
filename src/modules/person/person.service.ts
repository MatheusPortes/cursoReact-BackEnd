import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from '../../entities/Person.entity';
import { TransactionalRepository } from '../unit-of-work/transactional-repository.provider';
import { CreatePersonDTO } from './DTOs/creste.dto';

@Injectable()
export class PersonService {
    constructor(
        @Inject('PERSON_REPOSITORY')
        private personRepository: Repository<Person>,
        private transactionalRepository: TransactionalRepository,
    ) {}

    async CreatePerson(params: CreatePersonDTO) {
        return await this.transactionalRepository.getRepository(Person).save(params)
    }
}
