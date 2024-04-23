import Link from "next/link";

import { Home as HomeContainer } from "@app/containers";

export default function Home() {
  return (
    <div className="sm:mx-40 mx-5 my-10">
      <Link href="post/new">
        <div className="mb-10">Home Page</div>
      </Link>
      <HomeContainer.List />
    </div>
  );
}
