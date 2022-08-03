import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from '../../entities/Person.entity';

@Injectable()
export class PersonService {
    constructor(
        @Inject('PERSON_REPOSITORY')
        private addressRepository: Repository<Person>,
    ) {}


}
