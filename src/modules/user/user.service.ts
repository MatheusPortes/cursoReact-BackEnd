import { Body, Delete, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { ForbiddenException } from 'src/common/forbidden.exception'
import { Repository } from 'typeorm'
import { User } from '../../entities/User.entity'
import { PersonService } from '../person/person.service'
import { TransactionalRepository } from '../unit-of-work/transactional-repository.provider'
import { CreateUserDTO } from './DTOs/create.dto'

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private transactionalRepository: TransactionalRepository,
    private personService: PersonService
  ) { }

  async createUser(@Body() params: CreateUserDTO) {
    const { person, user } = params

    const new_person = await this.personService.CreatePerson(person)

    const data_user = { ...user, id_person: new_person.id }

    const user_by_login = await this.userRepository.findOneBy({ login: user.login })

    if (user_by_login) {
      throw new ForbiddenException(`Este login: ${user_by_login.login} já está vinculado a um usuário no sistema.`, HttpStatus.FORBIDDEN);
    }

    const user_by_email = await this.userRepository.findOneBy({ email: user.email })

    if (user_by_email) {
      throw new ForbiddenException(`Este E-mail: ${user_by_email.email} já está vinculado a um usuário no sistema.`, HttpStatus.FORBIDDEN);
    }

    await this.transactionalRepository
      .getRepository(User)
      .save(data_user)
  }
}
