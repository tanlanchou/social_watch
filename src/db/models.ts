import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table({
  tableName: 'users'
})
export class User extends Model<User> {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @Column({
    allowNull: false
  })
  email: string;

  @Column({
    allowNull: false
  })
  passwd: string;

  @Column({
    allowNull: false
  })
  create_time: Date;

  @Column({
    allowNull: false
  })
  last_time: Date;

  @Column({
    allowNull: false
  })
  status: number;

  @Column({
    allowNull: false
  })
  email_check: number;
}
