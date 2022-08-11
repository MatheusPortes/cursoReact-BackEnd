import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ForbiddenException } from 'src/common/forbidden.exception';
import { Repository } from 'typeorm';
import { Person } from '../../entities/Person.entity';
import { TransactionalRepository } from '../unit-of-work/transactional-repository.provider';
import { CreatePersonDTO } from './DTOs/creste.dto';
import { PatchPersonDTO } from './DTOs/patch.dto';
import { PutPersonDTO } from './DTOs/put.dto';

@Injectable()
export class PersonService {
    constructor(
        @Inject('PERSON_REPOSITORY')
        private personRepository: Repository<Person>,
        private transactionalRepository: TransactionalRepository,
    ) { }

    async searchPersonByCPF(cpf: string): Promise<number> {
        const person = await this.personRepository.findOneBy({ cpf: String(cpf) })

        if (!person) {
            throw new ForbiddenException(`Este CPF: ${cpf} não está vinculado a uma pessoa no sistema.`, HttpStatus.FORBIDDEN);
        }
        const { id } = person
        return id
    }

    async searchPersonByID(id_person: number): Promise<number> {
        const person = await this.personRepository.findOneBy({ id: id_person })

        if (!person) {
            throw new ForbiddenException(`Registro não está vinculado a uma pessoa no sistema.`, HttpStatus.FORBIDDEN);
        }
        const { id } = person
        return id
    }

    async CreatePerson(params: CreatePersonDTO) {
        const person_by_cpf = await this.personRepository.findOneBy({ cpf: params.cpf })

        if (person_by_cpf) {
            throw new ForbiddenException(`Este CPF: ${person_by_cpf.cpf} já está vinculado a uma pessoa no sistema.`, HttpStatus.FORBIDDEN);
        }

        if (params.rg) {
            const person_by_rg = await this.personRepository.findOneBy({ rg: params.rg })

            if (person_by_rg) {
                throw new ForbiddenException(`Este RG: ${person_by_rg.rg} já está vinculado a uma pessoa no sistema.`, HttpStatus.FORBIDDEN);
            }
        }

        return await this.transactionalRepository.getRepository(Person).save(params)
    }

    async patchPerson(id_user: number, params: PatchPersonDTO) {
        await this.searchPersonByID(id_user)
        await this.personRepository.update(id_user, params)
    }

    async putPerson(id_user: number, params: PutPersonDTO) {
        await this.searchPersonByID(id_user)
        await this.personRepository.update(id_user, params)
    }
}
