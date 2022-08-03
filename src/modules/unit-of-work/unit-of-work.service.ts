import { Inject, Injectable, Scope } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class UnitOfWorkService {

    private transactionManager: EntityManager | null;

    constructor(
        @Inject('DATA_SOURCE')
        private dataSource: DataSource,
    ) { }

    getTransactionManager(): EntityManager | null {
        return this.transactionManager;
    }

    getDataSource(): DataSource {
        return this.dataSource;
    }

    async withTransaction<T>(work: () => T): Promise<T> {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.startTransaction();
        this.transactionManager = queryRunner.manager;
        try {
            const result = await work();
            await queryRunner.commitTransaction();
            return result;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
            this.transactionManager = null;
        }
    }
}
