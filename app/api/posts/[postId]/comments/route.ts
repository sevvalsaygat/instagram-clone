import { NextRequest, NextResponse } from "next/server";
import db from "@/libs/db";
import { nanoid } from "nanoid";

// GET: Fetch comments for a post
export async function GET(req: NextRequest, { params }: { params: { postId: string } }) {
  const { postId } = params;
  const database = await db();
  const post = database.data.posts.find((p) => p.id === postId);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json(post.comments || []);
}

// POST: Add a comment to a post
export async function POST(req: NextRequest, { params }: { params: { postId: string } }) {
  const { postId } = params;
  const { userId, username, avatar, text } = await req.json();
  if (!text || !userId || !username || !avatar) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const database = await db();
  const post = database.data.posts.find((p) => p.id === postId);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  const newComment = {
    id: nanoid(),
    userId,
    username,
    avatar,
    text,
    createdAt: new Date().toISOString(),
  };
  post.comments = post.comments || [];
  post.comments.push(newComment);
  await database.write();
  return NextResponse.json(newComment, { status: 201 });
} 