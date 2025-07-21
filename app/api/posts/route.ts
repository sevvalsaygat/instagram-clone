// Main posts API route. Comments are handled in /api/posts/[postId]/comments/route.ts
// TODO: Create /api/posts/[postId]/comments/route.ts for comment functionality
import { db } from "@/libs";

export async function GET() {
  const myDb = await db();
  const posts = myDb.data.posts.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return Response.json({ data: posts });
}
