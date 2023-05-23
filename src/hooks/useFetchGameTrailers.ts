import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import GameTrailer from "../entities/GameTrailer";
import AXIOSClient, { DataFromFetch } from "../APIservices/AXIOSClient";

const useFetchGameTrailers = (id: number | string) => {
  const axiosClientForGamesTrailers = new AXIOSClient<GameTrailer>(
    "/games/" + id + "/movies"
  );

  const {
    data: gameTrailers,
    error,
    isLoading,
  } = useQuery<DataFromFetch<GameTrailer>, AxiosError>({
    queryKey: ["games", id, "movies"],
    queryFn: () => axiosClientForGamesTrailers.get(),
    staleTime: 24 * 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000,
  });

  return {
    gameTrailers,
    error,
    isLoading,
  };
};

export default useFetchGameTrailers;
