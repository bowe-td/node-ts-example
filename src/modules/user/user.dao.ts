import UserModel, { IUser } from './user.model';

export async function getUsers(): Promise<IUser[]> {
  const users = await UserModel.find();

  return users;
}
