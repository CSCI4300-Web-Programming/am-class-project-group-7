import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "../../lib/mongodb";
import Post from "../../../../models/post";

type PostRecord = {
  _id: { toString: () => string };
  title: string;
  content: string;
};

function toClient(doc: PostRecord) {
  return {
    id: doc._id.toString(),
    title: doc.title,
    content: doc.content,
  }; 
}

export async function GET() {
    await connectDB();
    const posts = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json(posts.map(toClient));
}

export async function POST(req: Request) {
    const session = await auth();
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); // error
    }

    await connectDB();
    const { title, content } = await req.json(); // Uses the two constraints from Post

    if (!title || !content) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 }); // error
    }

    const post = await Post.create({ title, content }); // Using the Post from models
    return NextResponse.json(toClient(post), { status: 201 });
}