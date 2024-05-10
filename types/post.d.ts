type PostType = {
  id: string;
  description: string;
  image: string;
  createdAt: string;
};

type IPostFormType = {
  description: string;
  image: string;
  step: number;
};

type RemovePostRequestType = {
  id: string;
};
