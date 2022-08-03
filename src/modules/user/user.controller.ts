import { Controller } from '@nestjs/common';
import { UnitOfWorkService } from '../unit-of-work/unit-of-work.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
        private unitOfWork: UnitOfWorkService,
    ) {}
}
