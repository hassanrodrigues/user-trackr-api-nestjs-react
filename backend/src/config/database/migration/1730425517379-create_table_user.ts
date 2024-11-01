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
            name: 'user_name',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'user_surname',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'user_email',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'user_password',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'user_refresh_token',
            type: 'varchar',
            length: '150',
            isNullable: true,
          },
          {
            name: 'profile_id',
            type: 'int',
            isNullable: true,
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
            isNullable: true,
            default: false,
          },
        ],
        foreignKeys: [
          {
            name: 'fk_user_profile',
            columnNames: ['profile_id'],
            referencedTableName: 'profiles',
            referencedColumnNames: ['profile_id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('public.users');
  }
}
