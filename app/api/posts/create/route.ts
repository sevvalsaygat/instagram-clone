import { db } from "@app/libs";

import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  const myDb = await db();
  const body = await request.json();

  const createdPost = {
    id: uuidv4(),
    description: body.description,
    image: body.image,
  };

  myDb.data.posts.push(createdPost);
  await myDb.write();

  return Response.json(createdPost);
}
