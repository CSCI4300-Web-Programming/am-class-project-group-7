import mongoose, { Schema, Model } from "mongoose";

export type UserType = {
  username: string;
  password: string;
};

export type UserDoc = mongoose.HydratedDocument<UserType>;

const userSchema = new Schema<UserType>(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);


export const User: Model<UserType> =
  (mongoose.models.User as Model<UserType>) ||
  mongoose.model<UserType>("User", userSchema);

export default User;