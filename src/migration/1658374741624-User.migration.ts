import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Usermigration1658374741624 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'id_person',
                    type: 'integer',
                },
                {
                    name: 'id_address',
                    type: 'integer',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'is_state',
                    type: 'boolean',
                },
                {
                    name: 'update_at',
                    type: 'timestamp',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['id_person'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'person',
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                },
                {
                    columnNames: ['id_address'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'address',
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user')
    }

}
