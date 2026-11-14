import mongoose, { Schema, Model } from "mongoose";

export type PostType = {
  title: string;
  user: string;
  text: string;
  rating?: number;
  link?: string;
};

export type PostDoc = mongoose.HydratedDocument<PostType>;

const postSchema = new Schema<PostType>(
  {
    title: { type: String, required: true },
    user: { type: String, required: true },
    text: {type: String, required: true},
    rating: { type: Number, min: 0, max: 10 },
    link: { type: String, maxlength: 1000 },
  },
  { timestamps: true }
);

export const Post: Model<PostType> =
  (mongoose.models.Post as Model<PostType>) ||
  mongoose.model<PostType>("Post", postSchema);

export default Post;