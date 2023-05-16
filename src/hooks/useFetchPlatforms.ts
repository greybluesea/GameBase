import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import axiosClientForPlatforms, {
  Platform,
} from "../services/axiosClientForPlatforms";
import { ResFromFetch } from "../services/AXIOSClient";

const useFetchPlatforms = () => {
  const {
    data: resIncludingPlatforms,
    error,
    isLoading,
  } = useQuery<ResFromFetch<Platform>, AxiosError>({
    queryKey: ["platforms"],
    queryFn: axiosClientForPlatforms.get,
    staleTime: 3 * 24 * 60 * 60 * 1000,
    cacheTime: 3 * 24 * 60 * 60 * 1000,
    /* initialData: { count: initialPlatforms.length, results: initialPlatforms }, */
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  /* const {
    data: platforms,
    error,
    isLoading,
  } = useFetchData<Platform>("/platforms/lists/parents"); */

  return { resIncludingPlatforms, error, isLoading };
};

export default useFetchPlatforms;
