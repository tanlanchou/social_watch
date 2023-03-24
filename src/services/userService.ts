import { User, IUser } from '../models/user';
import { Op } from 'sequelize';

export class UserService {
  constructor(private db: any) { } // 用 Sequelize 连接数据库的示例

  async getUserById(id: number): Promise<IUser | null> {
    const user = await this.db.User.findByPk(id);
    if (user) {
      return User.from(user.toJSON());
    }
    return null;
  }

  async getAllUsers(): Promise<IUser[]> {
    return this.db.User.findAll();
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    return this.db.User.findOne({ where: { email } });
  }

  async getUsersByName(name: string): Promise<IUser[]> {
    return this.db.User.findAll({ where: { name: { [Op.like]: `%${name}%` } } });
  }

  async createUser(data: Partial<IUser>): Promise<IUser> {
    const user = await this.db.User.create(data);
    return User.from(user.toJSON());
  }

  async updateUser(id: number, data: Partial<IUser>): Promise<IUser | null> {
    const user = await this.db.User.findByPk(id);
    if (user) {
      await user.update(data);
      return User.from(user.toJSON());
    }
    return null;
  }

  async deleteUser(id: number): Promise<boolean> {
    const result = await this.db.User.destroy({ where: { id } });
    return result === 1;
  }
}
