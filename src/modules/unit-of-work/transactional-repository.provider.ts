import { Injectable, Scope } from "@nestjs/common";
import { EntitySchema, ObjectType, Repository } from "typeorm";
import { UnitOfWorkService } from "./unit-of-work.provider"


@Injectable({ scope: Scope.REQUEST })
export class TransactionalRepository {
    constructor(private readonly unitOfWork: UnitOfWorkService) { }

    getRepository<Entity>(
        target: ObjectType<Entity> | EntitySchema<Entity> | string
    ): Repository<Entity> {
        const transactionManager = this.unitOfWork.getTransactionManager();
        const dataSource = this.unitOfWork.getDataSource();

        if (transactionManager) {
            return new Repository<any>(target, transactionManager);
        }

        return dataSource.getRepository(target);
    }
}