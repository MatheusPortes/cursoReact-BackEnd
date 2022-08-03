import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Addressmigration1658372894187 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'address',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'id_city',
                    type: 'integer',
                },
                {
                    name: 'cep',
                    type: 'integer',
                },
                {
                    name: 'neighborhood',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'number',
                    type: 'integer',
                },
                {
                    name: 'street',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'complement',
                    type: 'varchar',
                    length: '255',
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
                    columnNames: ['id_city'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'city',
                    onDelete: "NO ACTION",
                    onUpdate: "CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('address')
    }

}
