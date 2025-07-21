import { NextRequest, NextResponse } from "next/server";
import db from "@/libs/db";

// DELETE: Remove a comment from a post
export async function DELETE(req: NextRequest, { params }: { params: { postId: string; commentId: string } }) {
  const { postId, commentId } = params;
  const database = await db();
  const post = database.data.posts.find((p) => p.id === postId);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  const prevLength = post.comments?.length || 0;
  post.comments = (post.comments || []).filter((c) => c.id !== commentId);
  if (post.comments.length === prevLength) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }
  await database.write();
  return NextResponse.json({ success: true });
} 