import React from "react";
import Image from "next/image";

type ListItemPropTypes = {
  post: PostType;
};

const ListItem: React.FC<ListItemPropTypes> = ({ post }) => {
  return (
    <Image
      src={post.image}
      width={100}
      height={100}
      alt="logo"
      className="object-contain"
    />
  );
};

export default ListItem;
