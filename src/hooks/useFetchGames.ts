import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { QueryGame } from "../App";
import axiosClientForGames, { Game } from "../services/axiosClientForGames";
import { ResFromFetch } from "../services/AXIOSClient";

const useFetchGames = (queryGame: QueryGame) => {
  const {
    data: resIncludingGames,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery<ResFromFetch<Game>, AxiosError>({
    queryKey: ["/games", queryGame],
    queryFn: ({ pageParam = 1 }) =>
      axiosClientForGames.get({
        params: {
          genres: queryGame?.genre?.id,
          parent_platforms: queryGame?.platform?.id,
          ordering: queryGame?.sort?.value,
          search: queryGame?.search,
          page: pageParam,
          page_size: 12,
        },
      }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      /* return lastPage.results.length > 0 ? allPages.length + 1 : undefined; */
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

  /* const useFetchGames = (queryGame: QueryGame) => {
  const {
    data: resIncludingGames,
    error,
    isLoading,
  } = useQuery<ResFromFetch<Game>, AxiosError>({
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
  }); */

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

  return {
    resIncludingGames,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
};

export default useFetchGames;
