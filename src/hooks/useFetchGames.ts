import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { QueryGame } from "../App";
import axiosClientForGames, { Game } from "../services/axiosClientForGames";

interface ResFetchGames<Game> {
  count: number;
  results: Game[];
}

const useFetchGames = (queryGame: QueryGame) => {
  const {
    data: resIncludingGames,
    error,
    isLoading,
  } = useQuery<ResFetchGames<Game>, AxiosError>({
    queryKey: ["/games", queryGame],
    queryFn: () =>
      axiosClientForGames.get({
        params: {
          genres: queryGame?.genre?.id,
          parent_platforms: queryGame?.platform?.id,
          ordering: queryGame?.sort?.value,
          search: queryGame?.search,
        },
      }),
  });

  /* const useFetchGames = (queryGame: QueryGame) => {
  const {
    data: games,
    error,
    isLoading,
  } = useFetchData<Game>(
    "/games",
    {
      params: {
        genres: queryGame.genre?.id,
        parent_platforms: queryGame.platform?.id,
        ordering: queryGame.sort?.value,
        search: queryGame.search,
      },
    },
    [queryGame]
  ); */

  return { resIncludingGames, error, isLoading };
};

export default useFetchGames;
