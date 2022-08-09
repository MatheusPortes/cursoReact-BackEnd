import { Body, Delete, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entities/User.entity';
import { PersonService } from '../person/person.service';
import { TransactionalRepository } from '../unit-of-work/transactional-repository.provider';
import { CreateUserDTO } from './DTOs/create.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
        private transactionalRepository: TransactionalRepository,
        private personService: PersonService,
    ) { }

    async createUser(@Body() params: CreateUserDTO) {
        console.log('params',params)
        const { person, user } = params
        const new_person = await this.personService.CreatePerson(person)
        console.log('id_person',new_person.id)
        const data_user = { ...user, id_person: new_person.id }
        await this.transactionalRepository.getRepository(User).save(data_user)
    }
}
