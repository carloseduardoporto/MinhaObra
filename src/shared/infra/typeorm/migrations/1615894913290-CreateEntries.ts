import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateEntrie1615894913290 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'entries',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'quantity',
            type: 'decimal',
            isNullable: false,
            precision: 8,
            scale: 1,
          },
          {
            name: 'is_payed',
            type: 'boolean',
          },
          {
            name: 'construction_id',
            type: 'uuid',
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'entries',
      new TableForeignKey({
        name: 'EntriesConstruction',
        columnNames: ['construction_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'constructions',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('entries', 'EntriesConstruction');

    await queryRunner.dropTable('entries');
  }
}
