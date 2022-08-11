import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Personmigration1658372931548 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'person',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'cpf',
                    type: 'varchar',
                    length: '11',
                    isUnique: true,
                },
                {
                    name: 'rg',
                    type: 'varchar',
                    length: '10',
                    isNullable: true,
                    isUnique: true,
                },
                {
                    name: 'birth_date',
                    type: 'date',
                    isNullable: true,
                },
                {
                    name: 'is_status',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'update_at',
                    type: 'timestamp',
                    isNullable: true,
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('person')
    }

}
