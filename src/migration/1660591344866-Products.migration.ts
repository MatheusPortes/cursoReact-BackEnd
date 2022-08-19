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
                },
                {
                    name: 'id_user',
                    type: 'integer',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'price',
                    type: 'integer',
                },
                {
                    name: 'quantity',
                    type: 'integer',
                },
                {
                    name: 'bulk',
                    type: 'integer',
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
                {
                    columnNames: ['id_user'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'user',
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
