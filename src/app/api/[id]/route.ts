import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import Post from "../../../../models/post";
import mongoose from "mongoose";

type Ctx = { params: Promise<{ id: string}> };

function toClient(doc: any) {
  return {
    id: doc._id.toString(),
    title: doc.title,
    description: doc.description,
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
  const { id } = await params;

  if (!mongoose.isValidObjectId(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const { title, description } = await req.json();

  if (!title || !description) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  await connectDB();
  const post = await Post.findByIdAndUpdate(
    id,
    { title, description },
    { new: true, runValidators: true }
  );

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(toClient(post));
}


export async function DELETE(_req: Request, { params }: Ctx) {
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