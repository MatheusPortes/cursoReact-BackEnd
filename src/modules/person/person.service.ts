import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ForbiddenException } from 'src/common/forbidden.exception';
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
        const person_by_cpf = await this.personRepository.findOneBy({ cpf: params.cpf })

        if(person_by_cpf) {
            throw new ForbiddenException(`Este CPF: ${person_by_cpf.cpf} já está vinculado a uma pessoa no sistema.`, HttpStatus.FORBIDDEN);
        }

        const person_by_rg = await this.personRepository.findOneBy({ rg: params.rg })

        if(person_by_rg) {
            throw new ForbiddenException(`Este RG: ${person_by_rg.rg} já está vinculado a uma pessoa no sistema.`, HttpStatus.FORBIDDEN);
        }

        return await this.transactionalRepository.getRepository(Person).save(params)
    }
}
