import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class ProductsColormigration1661128586206 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'products_color',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'id_color',
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
                    columnNames: ['id_color'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'color',
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
    }

}
