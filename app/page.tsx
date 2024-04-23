import Link from "next/link";

import { Home as HomeContainer } from "@app/containers";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row w-full">
        <div className="">
          <HomeContainer.Sidebar />
        </div>
        <div className="">
          <HomeContainer.List />
        </div>
      </div>
    </div>
  );
}
