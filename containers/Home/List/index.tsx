"use client";

import { Home } from "@app/containers";
import { api } from "@app/hooks";

type ListPropTypes = {};

const List: React.FC<ListPropTypes> = () => {
  const { data: postData, isLoading, isSuccess } = api.useGetPosts();

  return (
    <div className="flex flex-row">
      {postData?.data.map((post) => (
        <div key={post.id} className="border rounded-xl mb-5">
          <Home.ListItem post={post} />
        </div>
      ))}
    </div>
  );
};

export default List;
