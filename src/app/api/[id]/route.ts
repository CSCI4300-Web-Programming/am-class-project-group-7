import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "../../lib/mongodb";
import Post from "../../../../models/post";
import mongoose from "mongoose";

type Ctx = { params: Promise<{ id: string}> };

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

export async function GET(_req: Request, { params }: Ctx) {
  const { id } = await params;

  if (!mongoose.isValidObjectId(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  await connectDB();
  const post = await Post.findById(id);
  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(toClient(post));
}

export async function PUT(req: Request, { params }: Ctx) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  if (!mongoose.isValidObjectId(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const { title, content } = await req.json();

  if (!title || !content) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  await connectDB();
  const post = await Post.findByIdAndUpdate(
    id,
    { title, content },
    { new: true, runValidators: true }
  );

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(toClient(post));
}


export async function DELETE(_req: Request, { params }: Ctx) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  if (!mongoose.isValidObjectId(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  await connectDB();
  const post = await Post.findByIdAndDelete(id);

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Deleted" });
}