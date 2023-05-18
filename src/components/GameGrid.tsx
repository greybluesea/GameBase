import { Button, HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useFetchGames from "../hooks/useFetchGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardContainer from "./GameCardContainer";
import { QueryGame } from "../App";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadMoreBtn from "./LoadMoreBtn";

/* interface Props {
  queryGame: QueryGame;
}
 */
const GameGrid = (/* { queryGame }: Props */) => {
  const {
    resIncludingGames,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useFetchGames();
  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (error) return <Text>{error.message}</Text>;

  const totalFetchedGames = resIncludingGames?.pages.reduce(
    (total, page) => page.results.length + total,
    0
  );
  return (
    <>
      <InfiniteScroll
        dataLength={totalFetchedGames || 0}
        hasMore=/* {hasNextPage || false} */ {!!hasNextPage}
        next={() => fetchNextPage()}
        loader={
          <LoadMoreBtn
            isFetchingNextPage={isFetchingNextPage}
            fetchNextPage={fetchNextPage}
          />
        }
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, xl: 3, "2xl": 4 }}
          spacing={5}
          padding={2}
        >
          {isLoading
            ? skeletonArray.map((each) => (
                <GameCardContainer key={each}>
                  {" "}
                  <SkeletonCard /* key={each} */ />
                </GameCardContainer>
              ))
            : resIncludingGames?.pages.map((page) =>
                page.results.map((each) => (
                  <GameCardContainer key={each.id}>
                    {" "}
                    <GameCard /* key={each.id} */ game={each}></GameCard>
                  </GameCardContainer>
                ))
              )}
          {isFetchingNextPage &&
            skeletonArray.map((each) => (
              <GameCardContainer key={each}>
                {" "}
                <SkeletonCard /* key={each} */ />
              </GameCardContainer>
            ))}
        </SimpleGrid>
      </InfiniteScroll>
      {/* {hasNextPage && (
        <LoadMoreBtn
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
        />
      )} */}
    </>
  );
};

export default GameGrid;
