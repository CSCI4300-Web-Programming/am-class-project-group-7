import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import Post from "../../../../models/post";

function toClient(doc: any) {
  return {
    id: doc._id.toString(),
    title: doc.title,
    description: doc.description,
  }; 
}

export async function GET() {
    await connectDB();
    const posts = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json(posts);
}

export async function POST(req: Request) {
    await connectDB();
    const { title, description } = await req.json();

    if (!title || !description) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const post = await Post.create({ title, description });
    return NextResponse.json(post, { status: 201 });
}