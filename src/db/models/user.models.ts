import { Table, Column, Model, DataType, Unique, PrimaryKey } from 'sequelize-typescript';

@Table({ tableName: 'user' })
export class UserModel extends Model<UserModel> {
  @Unique
  @Column(DataType.STRING)
  email!: string;

  @Unique
  @Column(DataType.STRING)
  phone!: string;

  @Column(DataType.STRING)
  password!: string;

  @Column(DataType.ENUM('active', 'inactive'))
  status!: 'active' | 'inactive';

  @Column(DataType.DATE)
  createdAt!: Date;

  @Column(DataType.DATE)
  updatedAt!: Date;
}
