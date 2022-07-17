import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Citymigration1657858115031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'city',
            columns: [
                {
                    name: 'idCity',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    length: '255',
                    default: 'now()'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('city')
    }

}