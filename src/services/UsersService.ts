import UserModel, { IUser } from '../models/UserModel';

export default class UserController {
  public async getUsers(): Promise<IUser[]> {
    const users = await UserModel.find();

    return users;
  }
}
