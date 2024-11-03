import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { hash } from 'src/common/utils/hash';
import { faker } from '@faker-js/faker';

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
            name: 'user_first_access',
            type: 'boolean',
            isNullable: true,
            default: true,
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

    const idProfileAdmin = await queryRunner.query(
      `SELECT profile_id FROM public.profiles WHERE profile_identifier = 'adm'`,
    );

    const idProfileCommon = await queryRunner.query(
      `SELECT profile_id FROM public.profiles WHERE profile_identifier = 'usr'`,
    );

    await queryRunner.query(
      `INSERT INTO public.users (user_name, user_surname, user_email, user_password, profile_id, user_status) 
       VALUES ('Hassan', 'Rodrigues', 'hassanrodrigues14@gmail.com', '${await hash('123456')}', ${idProfileAdmin[0].profile_id}, true)`,
    );

    for (let i = 0; i < 20; i++) {
      const isAdmin = Math.random() < 0.5;
      const profileId = isAdmin
        ? idProfileAdmin[0].profile_id
        : idProfileCommon[0].profile_id;
      const userStatus = Math.random() < 0.5;
      const email = faker.internet.email();
      const password = await hash(faker.internet.password());

      await queryRunner.query(
        `INSERT INTO public.users (user_name, user_surname, user_email, user_password, profile_id, user_status) 
         VALUES ('${faker.person.firstName()}', '${faker.person.lastName()}', '${email}', '${password}', ${profileId}, ${userStatus})`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('public.users');
  }
}
