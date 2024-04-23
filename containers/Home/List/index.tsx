"use client";

import { Home } from "@app/containers";
import { api } from "@app/hooks";

type ListPropTypes = {};

const List: React.FC<ListPropTypes> = () => {
  const { data: postData, isLoading, isSuccess } = api.useGetPosts();

  return (
    <div>
      {postData?.data.map((post) => (
        <Home.ListItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default List;
