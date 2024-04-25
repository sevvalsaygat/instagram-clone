import Link from "next/link";

import { Home as HomeContainer } from "@app/containers";

export default function Home() {
  return (
    <div>
      <HomeContainer.List />
    </div>
  );
}
