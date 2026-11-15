import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/user";
import { connectDB } from "../../lib/mongodb";

export const POST = async (request:NextRequest ) => {
let body: unknown;

try {
  body = await request.json();
} catch {
  return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
}

if (typeof body !== "object" || body === null || Array.isArray(body)) {
  return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
}

const { username, email, password, confirmPassword } = body as Record<string, unknown>;

if (
  typeof username !== "string" ||
  typeof email !== "string" ||
  typeof password !== "string" ||
  typeof confirmPassword !== "string"
) {
  return NextResponse.json({ error: "All fields are required" }, { status: 400 });
}

const cleanUsername = username.trim();

if (!cleanUsername) {
  return NextResponse.json({ error: "Username is required" }, { status: 400 });
}

if (password.length < 8) {
  return NextResponse.json(
    { error: "Password must be at least 8 characters" },
    { status: 400 }
  );
}

    if (password !== confirmPassword) {
        return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) {
        return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

await connectDB();

const hashedPassword = await bcrypt.hash(password, 12);

const user = await User.create({
  username: cleanUsername,
  email: cleanEmail,
  password: hashedPassword,
});

return NextResponse.json(
  {
    message: "Registration successful",
    user: {
      id: user._id.toString(),
      username: user.username,
      email: user.email,
    },
  },
  { status: 201 }
);
}