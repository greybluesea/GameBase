import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { QueryGame } from "../App";
import axiosClientForGames, { Game } from "../services/axiosClientForGames";
import { ResFromFetch } from "../services/AXIOSClient";
import useQueryGameStore from "../components/store";

const useFetchGames = (/* queryGame: QueryGame */) => {
  const { genreQuery, platformQuery, sortQuery, searchTextQuery } =
    useQueryGameStore((state) => ({
      genreQuery: state.genreQuery,
      platformQuery: state.platformQuery,
      sortQuery: state.sortQuery,
      searchTextQuery: state.searchTextQuery,
    }));
  const {
    data: resIncludingGames,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery<ResFromFetch<Game>, AxiosError>({
    queryKey: [
      "/games",
      {
        genres: genreQuery?.name,
        parent_platforms: platformQuery?.name,
        ordering: sortQuery?.name,
        search: searchTextQuery ? searchTextQuery : undefined,
      },
      /* {
        genres: queryGame?.genre?.name,
        parent_platforms: queryGame?.platform?.name,
        ordering: queryGame?.sort?.name,
        search: queryGame?.search,
      }, */
    ],
    queryFn: ({ pageParam = 1 }) =>
      axiosClientForGames.get({
        params: {
          genres: genreQuery?.id,
          parent_platforms: platformQuery?.id,
          ordering: sortQuery?.value,
          search: searchTextQuery ? searchTextQuery : null,
          page: pageParam,
          page_size: 8,
        },

        /* {
          genres: queryGame?.genre?.id,
          parent_platforms: queryGame?.platform?.id,
          ordering: queryGame?.sort?.value,
          search: queryGame?.search,
          page: pageParam,
          page_size: 8,
        }, */
      }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      /* return lastPage.results.length > 0 ? allPages.length + 1 : undefined; */
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
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
