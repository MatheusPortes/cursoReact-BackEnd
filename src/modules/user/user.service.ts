import { HttpStatus, Inject, Injectable } from '@nestjs/common'
import { ForbiddenException } from 'src/common/forbidden.exception'
import { Repository } from 'typeorm'
import { User } from '../../entities/User.entity'
import { PersonService } from '../person/person.service'
import { TransactionalRepository } from '../unit-of-work/transactional-repository.provider'
import { CreateUserDTO } from './DTOs/create.dto'
import { CreateUserWithPersonDTO } from './DTOs/createWithPerson.dto'
import { PatchUserDTO } from './DTOs/patch.dto'
import { PutUserDTO } from './DTOs/put.dto'

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
        private transactionalRepository: TransactionalRepository,
        private personService: PersonService
    ) {}

    async searchUserByID(id_user: number): Promise<User> {
        const user = await this.userRepository.findOneBy({
            id: id_user,
        })

        if (!user) {
            throw new ForbiddenException(
                `Este usuário não tem registro no sistema.`,
                HttpStatus.NOT_FOUND
            )
        }

        return user
    }

    async createUser(params: CreateUserDTO) {
        const { person, user } = params

        const new_person = await this.personService.CreatePerson(person)

        const data_user = { ...user, id_person: new_person.id }

        const user_by_login = await this.userRepository.findOneBy({
            login: user.login,
        })

        if (user_by_login) {
            throw new ForbiddenException(
                `Este login: ${user_by_login.login} já está vinculado a um usuário no sistema.`,
                HttpStatus.FORBIDDEN
            )
        }

        const user_by_email = await this.userRepository.findOneBy({
            email: user.email,
        })

        if (user_by_email) {
            throw new ForbiddenException(
                `Este E-mail: ${user_by_email.email} já está vinculado a um usuário no sistema.`,
                HttpStatus.FORBIDDEN
            )
        }

        await this.transactionalRepository.getRepository(User).save(data_user)
    }

    async createUserWithPerson(id_person: number, params: CreateUserWithPersonDTO) {
        await this.searchUserByID(id_person)

        const login = await this.userRepository.findOneBy({
            login: params.login,
        })

        if (login) {
            throw new ForbiddenException(
                `Este login: ${login.login} já está vinculado a um usuário no sistema.`,
                HttpStatus.FORBIDDEN
            )
        }

        const email = await this.userRepository.findOneBy({
            email: params.email,
        })

        if (email) {
            throw new ForbiddenException(
                `Este E-mail: ${email.email} já está vinculado a um usuário no sistema.`,
                HttpStatus.FORBIDDEN
            )
        }

        await this.transactionalRepository.getRepository(User).save({ ...params, id_person })
    }

    async patchUser(id_user: number, params: PatchUserDTO) {
        await this.searchUserByID(id_user)
        await this.userRepository.update(id_user, params)
    }

    async putUser(id_user: number, params: PutUserDTO) {
        await this.searchUserByID(id_user)
        await this.userRepository.update(id_user, params)
    }
}
