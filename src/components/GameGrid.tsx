import { SimpleGrid, Text } from "@chakra-ui/react";
import useFetchGames from "../hooks/useFetchGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardContainer from "./GameCardContainer";
import { QueryGame } from "../App";

interface Props {
  queryGame: QueryGame;
}

const GameGrid = ({ queryGame }: Props) => {
  const { resIncludingGames, error, isLoading } = useFetchGames(queryGame);
  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (error) return <Text>{error.message}</Text>;
  return (
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
        : resIncludingGames?.results.map((each) => (
            <GameCardContainer key={each.id}>
              {" "}
              <GameCard /* key={each.id} */ game={each}></GameCard>
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
};

export default GameGrid;
