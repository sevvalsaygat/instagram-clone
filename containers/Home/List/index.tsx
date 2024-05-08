"use client";

import { Home } from "@app/containers";
import { api } from "@app/hooks";
import { Layout } from "@app/components";

type ListPropTypes = {};

const List: React.FC<ListPropTypes> = () => {
  const { data: postData, isLoading, isSuccess } = api.useGetPosts();

  return (
    <div className="flex flex-row w-full pt-12 gap-12">
      <div className="flex flex-row 2xl:w-4/5">
        <div className="2xl:w-1/4"></div>
        <div className="flex flex-col 2xl:w-3/4 xl:ml-24 xl:mr-8">
          <div className="flex flex-row gap-2 border-gray-300 border-b pb-4">
            <div className="text-base leading-5 font-semibold">Senin için</div>
            <div className="text-base leading-5 font-semibold text-gray-100">
              Takip Ettiklerin
            </div>
          </div>
          <Layout.Stories />
          {postData?.data.map((post) => (
            <div key={post.id}>
              <Home.ListItem post={post} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col 2xl:w-2/5 2xl:mr-36">
        <Layout.Suggestions />
      </div>
    </div>
  );
};

export default List;
