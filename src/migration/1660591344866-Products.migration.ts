import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Productsmigration1660591344866 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'id_volume_type',
                    type: 'integer',
                    isNullable: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'price',
                    type: 'float8',
                    isNullable: true,
                },
                {
                    name: 'quantity',
                    type: 'integer',
                    isNullable: true,
                },
                {
                    name: 'bulk',
                    type: 'integer',
                    isNullable: true,
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
            foreignKeys: [
                {
                    columnNames: ['id_volume_type'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'volume_type',
                    onDelete: "NO ACTION",
                    onUpdate: "CASCADE"
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
