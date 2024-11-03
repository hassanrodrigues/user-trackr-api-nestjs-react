import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableProfile1730425465606 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS public`);
    await queryRunner.createTable(
      new Table({
        name: 'profiles',
        schema: 'public',
        columns: [
          {
            name: 'profile_id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'profile_name',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'profile_identifier',
            type: 'varchar',
            length: '10',
          },
          {
            name: 'profile_status',
            type: 'boolean',
          },
        ],
      }),
    );
    //meus seeds

    await queryRunner.query(
      `INSERT INTO public.profiles (profile_name, profile_identifier, profile_status) VALUES ('Administrador', 'adm', true)`,
    );
    await queryRunner.query(
      `INSERT INTO public.profiles (profile_name, profile_identifier, profile_status) VALUES ('Usuario Comum', 'usr', true)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('public.profiles');
  }
}
