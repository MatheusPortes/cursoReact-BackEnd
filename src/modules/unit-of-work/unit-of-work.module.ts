import { Global, Module } from '@nestjs/common';
import { DataBaseProviders } from '../data-base/data-base.providers';
import { TransactionalRepository } from './transactional-repository.provider';
import { UnitOfWorkService } from './unit-of-work.service';

@Global()
@Module({
    providers: [UnitOfWorkService, TransactionalRepository,...DataBaseProviders],
    exports: [UnitOfWorkService, TransactionalRepository]
})
export class UnitOfWorkModule { }
