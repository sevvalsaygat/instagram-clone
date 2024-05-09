import { db } from "@app/libs";

export async function POST(request: Request) {
  const myDb = await db();
  const body = await request.json();
  const postId = body.id;

  const postIndex = myDb.data.posts.findIndex((post) => post.id === postId);

  if (postIndex === -1) {
    return Response.json({ message: "Post not found" }, { status: 404 });
  }

  myDb.data.posts.splice(postIndex, 1);
  await myDb.write();

  return Response.json({ message: "Post removed" });
}
