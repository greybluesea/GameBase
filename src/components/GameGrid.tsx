import { SimpleGrid, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetchGames from "../hooks/useFetchGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import LoadMoreBtn from "./LoadMoreBtn";
import SkeletonCard from "./SkeletonCard";

/* interface Props {
  queryGame: QueryGame;
}
 */
const GameGrid = (/* { queryGame }: Props */) => {
  const {
    dataIncludingGames,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useFetchGames();
  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (error) return <Text>{error.message}</Text>;

  const totalFetchedGames = dataIncludingGames?.pages.reduce(
    (total, page) => page.results.length + total,
    0
  );
  /* console.log("GameGrid re-rendered"); */

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
            : dataIncludingGames?.pages.map((page) =>
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
