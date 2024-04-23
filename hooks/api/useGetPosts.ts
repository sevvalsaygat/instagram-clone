import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";

type ReturnType = {
  data: PostType[];
};

export default function useGetPosts(
  options?: UseQueryOptions<ReturnType, AxiosError<ErrorResponseType>>
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetPosts"],
    queryFn: () =>
      axiosInstance
        .get<ReturnType>("/api/posts")
        .then((response) => response.data),
    ...options,
  });
}
