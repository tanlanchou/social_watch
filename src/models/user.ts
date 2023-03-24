export interface IUser {
  id: number;
  email: string;
  phone: string;
  password: string;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}

export class User implements IUser {
  id!: number;
  email!: string;
  phone!: string;
  password!: string;
  status!: "active" | "inactive";
  createdAt!: Date;
  updatedAt!: Date;

  /**
   * Create new User.
   */
  static new_(
    name?: string,
    email?: string,
    phone?: string,
    password?: string,
    status?: "active" | "inactive",
    id?: number // id last cause usually set by db
  ): IUser {
    return {
      id: id ?? -1,
      email: email ?? "",
      phone: phone ?? "",
      password: password ?? "",
      status: status ?? "inactive",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  /**
   * Get user instance from object.
   */
  static from(param: object): IUser {
    // Check is user
    if (!UserModel.isUser(param)) {
      throw new Error("Invalid constructor parameter.");
    }
    // Get user instance
    const p = param as IUser;
    return UserModel.new_(p.email, p.phone, p.password, p.status, p.id);
  }

  /**
   * See if the param meets criteria to be a user.
   */
  static isUser(arg: unknown): boolean {
    return (
      !!arg &&
      typeof arg === "object" &&
      "id" in arg &&
      "email" in arg &&
      "phone" in arg &&
      "password" in arg &&
      "status" in arg
    );
  }
}
