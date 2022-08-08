import { Controller, Post } from '@nestjs/common';
import { UnitOfWorkService } from '../unit-of-work/unit-of-work.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
        private unitOfWork: UnitOfWorkService,
    ) {}

    @Post()
    async create():Promise<void> {
        await this.unitOfWork.withTransaction(async () => {
            
        })
    }
}
