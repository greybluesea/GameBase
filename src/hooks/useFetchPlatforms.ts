import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import axiosClientForPlatforms from "../APIservices/axiosClientForPlatforms";
import { Platform } from "../entities/Platform";
import { DataFromFetch } from "../APIservices/AXIOSClient";

const useFetchPlatforms = () => {
  const {
    data: dataIncludingPlatforms,
    error,
    isLoading,
  } = useQuery<DataFromFetch<Platform>, AxiosError>({
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

  return { dataIncludingPlatforms, error, isLoading };
};

export default useFetchPlatforms;
