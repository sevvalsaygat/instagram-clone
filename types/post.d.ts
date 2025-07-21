type CommentType = {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  text: string;
  createdAt: string;
};

type PostType = {
  id: string;
  description: string;
  image: string;
  createdAt: string;
  comments?: CommentType[];
};

type IPostFormType = {
  description: string;
  image: string;
  step: number;
};

type RemovePostRequestType = {
  id: string;
};
