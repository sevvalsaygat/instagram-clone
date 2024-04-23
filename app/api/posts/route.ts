import { db } from "@/libs";

export async function GET() {
  const myDb = await db();

  return Response.json({ data: myDb.data.posts });
}
