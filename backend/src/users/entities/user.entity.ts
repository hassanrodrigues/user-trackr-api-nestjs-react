import { BitToBooleanTransformer } from 'src/config/database/transformers/bit-to-boolean.transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users', schema: 'public' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  user_name: string;

  @Column()
  user_surname: string;

  @Column()
  user_email: string;

  @Column()
  user_password: string;

  @Column()
  user_refresh_token: string;

  @Column({
    type: 'bit',
    transformer: new BitToBooleanTransformer(),
  })
  user_status: boolean;

  @Column()
  user_created_at: Date;

  @Column()
  user_updated_at: Date;

  @Column({
    type: 'bit',
    transformer: new BitToBooleanTransformer(),
  })
  user_deleted: boolean;
}
