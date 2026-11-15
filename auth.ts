
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/user";
import connectMongoDB from "./config/mongodb";
import { Types } from "mongoose";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials) return null;

        const username = credentials.username as string;
        const password = credentials.password as string;

        if (!username || !password) return null;

        try {
          await connectMongoDB();

          const user = await User.findOne({ username: username.trim() });

          if (user) {
            const isMatch = await bcrypt.compare(
              password,
              user.password
            );

            if (isMatch) {
              return {
                id: user._id.toString(),
                name: user.username,
                email: user.email,
              };
            } else {
              console.log("Username or Password is not correct");
              return null;
            }
          } else {
            console.log("User not found");
            return null;
          }
        } catch (error: any) {
          console.log("An error occurred: ", error);
          return null;
        }
      },
    }),
  ],
});
