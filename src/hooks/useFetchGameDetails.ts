import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import axiosClientForGameDetails from "../services/axiosClientForGameDetails";
import { Game } from "../services/axiosClientForGames";

const useFetchGameDetails = (id: number) => {
  const {
    data: gameDetails,
    error,
    isLoading,
  } = useQuery<Game, AxiosError>({
    queryKey: ["games", id],
    queryFn: () => axiosClientForGameDetails.get(id),
    staleTime: 24 * 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000,
  });

  return {
    gameDetails,
    error,
    isLoading,
  };
};

export default useFetchGameDetails;
