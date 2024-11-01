import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableProfile1730425465606 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'profiles',
        schema: 'public',
        columns: [
          {
            name: 'perfil_id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'perfil_nome',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'perfil_status',
            type: 'boolean',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('public.profiles');
  }
}
