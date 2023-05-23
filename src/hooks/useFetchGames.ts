import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Game } from "../entities/Game";
import { DataFromFetch } from "../services/AXIOSClient";
import axiosClientForGames from "../services/axiosClientForGames";
import useQueryGameStore from "../store/store";

const useFetchGames = () => {
  const genreQuery = useQueryGameStore((state) => state.genreQuery);
  const platformQuery = useQueryGameStore((state) => state.platformQuery);
  const sortQuery = useQueryGameStore((state) => state.sortQuery);
  const searchTextQuery = useQueryGameStore((state) => state.searchTextQuery);

  const {
    data: dataIncludingGames,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery<DataFromFetch<Game>, AxiosError>({
    queryKey: [
      "games",
      {
        genre: genreQuery?.name,
        parent_platform: platformQuery?.name,
        sort: sortQuery?.name,
        search: searchTextQuery ? searchTextQuery : undefined,
      },
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
      }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      /* return lastPage.results.length > 0 ? allPages.length + 1 : undefined; */
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000,
  });

  /* const useFetchGames = (queryGame: QueryGame) => {
  const {
    data: dataIncludingGames,
    error,
    isLoading,
  } = useQuery<DataFromFetch<Game>, AxiosError>({
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
    dataIncludingGames,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
};

export default useFetchGames;
