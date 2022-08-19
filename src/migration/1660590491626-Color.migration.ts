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
                    name: 'id_products',
                    type: 'integer',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'initials',
                    type: 'varchar',
                    length: '10',
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['id_products'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'products',
                    onDelete: "NO ACTION",
                    onUpdate: "CASCADE"
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('color')
    }

}
