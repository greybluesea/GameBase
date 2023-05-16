import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import axiosClientForGenres, { Genre } from "../services/axiosClientForGenres";
import { ResFromFetch } from "../services/AXIOSClient";

const useFetchGenres = () => {
  const {
    data: resIncludingGenres,
    error,
    isLoading,
  } = useQuery<ResFromFetch<Genre>, AxiosError>({
    queryKey: ["genres"],
    queryFn: axiosClientForGenres.get,
    staleTime: 24 * 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000,
    /* initialData: { count: initialGenres.length, results: initialGenres }, */
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  return { resIncludingGenres, error, isLoading };

  //fetching from server:
  /*   const { data: genres, error, isLoading } = useFetchData<Genre>("/genres");
  return { genres, error, isLoading }; */

  //loading from local as static:
  /* return { genres: genres, error: null, isLoading: false }; */
};

export default useFetchGenres;
