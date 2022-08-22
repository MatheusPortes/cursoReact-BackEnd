import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class BuyProductsmigration1661027070564 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'buy_products',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'id_user',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'id_products',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['id_user'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'user',
                    onDelete: "NO ACTION",
                    onUpdate: "CASCADE"
                },
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
        await queryRunner.dropTable('buy_products')
    }

}
