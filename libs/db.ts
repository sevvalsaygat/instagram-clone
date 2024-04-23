import { JSONFilePreset } from "lowdb/node";

type DatabaseType = {
  posts: PostType[];
};

async function db() {
  const defaultData: DatabaseType = { posts: [] };
  const db = await JSONFilePreset<DatabaseType>("lowdb.json", defaultData);

  return db;
}

export default db;
