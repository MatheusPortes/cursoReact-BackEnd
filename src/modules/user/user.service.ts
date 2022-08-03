import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entities/User.entity';
import { TransactionalRepository } from '../unit-of-work/transactional-repository.provider';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
        private transactionalRepository: TransactionalRepository,
    ) { }

}
