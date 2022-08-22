import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Colormigration1660590491626 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'color',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'color',
                    type: 'varchar',
                    length: '100',
                    isNullable: true,
                },
                {
                    name: 'hex',
                    type: 'varchar',
                    length: '9',
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('color')
    }

}
