import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { GameDetails } from "../entities/GameDetals";
import axiosClientForGameDetails from "../services/axiosClientForGameDetails";

const useFetchGameDetails = (id: number | string) => {
  const {
    data: gameDetails,
    error,
    isLoading,
  } = useQuery<GameDetails, AxiosError>({
    queryKey: ["games", id],
    queryFn: () => axiosClientForGameDetails.getDetails(id),
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
