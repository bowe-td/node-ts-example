import mongoose, { Schema, Document } from 'mongoose';

const { model } = mongoose;

export interface IUser extends Document {
  fullName: string;
  phone: string;
  email: string;
  maritalStatus: string;
  gender: string;
  raceColor: string;
  PCD: boolean;
  profilePicture: string;
}

const UserSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  maritalStatus: { type: String, required: true, unique: true },
  gender: { type: String, required: true, unique: true },
  raceColor: { type: String, required: true, unique: true },
  PCD: { type: Boolean, required: true, unique: true },
  profilePicture: { type: String, required: true, unique: true },
});

export default model<IUser>('User', UserSchema);