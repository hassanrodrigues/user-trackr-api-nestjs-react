import { UserEntity } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'profiles', schema: 'public' })
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  profile_id: number;

  @Column()
  profile_name: string;

  @Column()
  profile_identifier: string;

  @Column()
  profile_status: boolean;

  @OneToMany(() => UserEntity, (user) => user.profile)
  users: UserEntity[];
}
