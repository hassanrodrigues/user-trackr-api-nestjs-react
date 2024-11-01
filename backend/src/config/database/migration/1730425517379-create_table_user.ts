import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUser1730425517379 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        schema: 'public',
        columns: [
          {
            name: 'user_id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'user_nome',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'user_subnome',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'user_email',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'user_senha',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'user_refresh_token',
            type: 'varchar',
            length: '150',
          },
          {
            name: 'perfil_id',
            type: 'int',
          },
          {
            name: 'user_status',
            type: 'boolean',
          },
          {
            name: 'user_created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'user_updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'user_deleted',
            type: 'boolean',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_user_perfil',
            columnNames: ['perfil_id'],
            referencedTableName: 'profiles',
            referencedColumnNames: ['perfil_id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('public.users');
  }
}
