import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateConstructions1615558301211 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'constructions',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'metragem',
          type: 'integer',
        },
        {
          name: 'valorPorMetragem',
          type: 'float',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'started_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'user_id',
          type: 'uuid',
          isNullable: false,
        }
      ]
    }))

    await queryRunner.createForeignKey('constructions', new TableForeignKey({
      name: 'ConstructionsUser',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    }))
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('constructions', 'ConstructionsUser' );

      await queryRunner.dropTable('constructions');
    }

}
