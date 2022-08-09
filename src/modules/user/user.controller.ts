import { Body, Controller, Post } from '@nestjs/common';
import { UnitOfWorkService } from '../unit-of-work/unit-of-work.service';
import { CreateUserDTO } from './DTOs/create.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
        private unitOfWork: UnitOfWorkService,
    ) {}

    @Post()
    async create(@Body() parems: CreateUserDTO):Promise<void> {
        await this.unitOfWork.withTransaction(async () => {
            await this.userService.createUser(parems)
        })
    }
}
