import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";

export default function useCreatePost(
  props: MutateOptions<PostType, AxiosError<ErrorResponseType>, IPostFormType>
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useCreatePost"],
    mutationFn: (createPostRequest: IPostFormType) =>
      axiosInstance
        .post<PostType>("/api/posts/create", createPostRequest)
        .then((response) => response.data),
    ...props,
  });
}
