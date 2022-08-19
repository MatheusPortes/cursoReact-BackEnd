import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common'
import { UnitOfWorkService } from '../unit-of-work/unit-of-work.service'
import { CreateUserDTO } from './DTOs/create.dto'
import { CreateUserWithPersonDTO } from './DTOs/createWithPerson.dto'
import { PatchUserDTO } from './DTOs/patch.dto'
import { PutUserDTO } from './DTOs/put.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
        private unitOfWork: UnitOfWorkService
    ) {}

    @Post(':id')
    async createUserWithPerson(
        @Param('id') id_person: number,
        @Body() params: CreateUserWithPersonDTO
    ): Promise<void> {
        await this.userService.createUserWithPerson(id_person, params)
    }

    @Post()
    async create(@Body() params: CreateUserDTO): Promise<void> {
        await this.unitOfWork.withTransaction(async () => {
            await this.userService.createUser(params)
        })
    }

    @Put(':id')
    async put(
        @Param('id') id_user: number,
        @Body() params: PutUserDTO
    ): Promise<void> {
        await this.userService.putUser(id_user, params)
    }

    @Patch(':id')
    async patch(
        @Param('id') id_user: number,
        @Body() params: PatchUserDTO
    ): Promise<void> {
        await this.userService.patchUser(id_user, params)
    }
}
