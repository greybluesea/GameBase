import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import GameTrailer from "../entities/GameTrailer";

import AXIOSClient, { DataFromFetch } from "../services/AXIOSClient";
import GameScreenshot from "../entities/GameScreenshot";

const useFetchGameScreenshots = (id: number | string) => {
  const axiosClientForGameScreenshots = new AXIOSClient<GameScreenshot>(
    "/games/" + id + "/screenshots"
  );

  const {
    data: gameScreenshots,
    error,
    isLoading,
  } = useQuery<DataFromFetch<GameScreenshot>, AxiosError>({
    queryKey: ["games", id, "movies"],
    queryFn: () => axiosClientForGameScreenshots.get(),
    staleTime: 24 * 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000,
  });

  return {
    gameScreenshots,
    error,
    isLoading,
  };
};

export default useFetchGameScreenshots;
