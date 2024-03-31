import Link from "next/link";

import { NewPost as NewPostContainer } from "@app/containers";

export default function NewPost() {
  return (
    <div className="p-10 mt-10">
      <Link href="/">
        <div className="mb-10">Create New Post</div>
      </Link>
      <NewPostContainer.Form />
    </div>
  );
}
