import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class State_migration1658120623958 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'state',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'id_country',
                    type: 'integer',
                    isNullable: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '60',
                },
                {
                    name: 'uf',
                    type: 'varchar',
                    length: '2',
                },
                {
                    name: 'ibge',
                    type: 'integer',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['id_country'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'country',
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }))

        await queryRunner.query(`INSERT INTO "state" (id, name, uf, ibge, id_country) VALUES
        (1, 'Acre', 'AC', 12, 1),
        (2, 'Alagoas', 'AL', 27, 1),
        (3, 'Amazonas', 'AM', 13, 1),
        (4, 'Amapá', 'AP', 16, 1),
        (5, 'Bahia', 'BA', 29, 1),
        (6, 'Ceará', 'CE', 23, 1),
        (7, 'Distrito Federal', 'DF', 53, 1),
        (8, 'Espírito Santo', 'ES', 32, 1),
        (9, 'Goiás', 'GO', 52, 1),
        (10, 'Maranhão', 'MA', 21, 1),
        (11, 'Minas Gerais', 'MG', 31, 1),
        (12, 'Mato Grosso do Sul', 'MS', 50, 1),
        (13, 'Mato Grosso', 'MT', 51, 1),
        (14, 'Pará', 'PA', 15, 1),
        (15, 'Paraíba', 'PB', 25, 1),
        (16, 'Pernambuco', 'PE', 26, 1),
        (17, 'Piauí', 'PI', 22, 1),
        (18, 'Paraná', 'PR', 41, 1),
        (19, 'Rio de Janeiro', 'RJ', 33, 1),
        (20, 'Rio Grande do Norte', 'RN', 24, 1),
        (21, 'Rondônia', 'RO', 11, 1),
        (22, 'Roraima', 'RR', 14, 1),
        (23, 'Rio Grande do Sul', 'RS', 43, 1),
        (24, 'Santa Catarina', 'SC', 42, 1),
        (25, 'Sergipe', 'SE', 28, 1),
        (26, 'São Paulo', 'SP', 35, 1),
        (27, 'Tocantins', 'TO', 17, 1),
        (99, 'Exterior', 'EX', 99, NULL);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('state')
    }

}
