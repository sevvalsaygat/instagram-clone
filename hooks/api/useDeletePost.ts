import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";

export default function useDeletePost(
  props: MutateOptions<
    unknown,
    AxiosError<ErrorResponseType>,
    RemovePostRequestType
  >
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useDeletePost"],
    mutationFn: (deletePostRequest: RemovePostRequestType) =>
      axiosInstance
        .post("/api/posts/remove", deletePostRequest)
        .then((response) => response.data),
    ...props,
  });
}
