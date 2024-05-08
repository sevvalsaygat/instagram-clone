import { db } from "@/libs";

export async function GET() {
  const myDb = await db();
  const posts = myDb.data.posts.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return Response.json({ data: posts });
}
