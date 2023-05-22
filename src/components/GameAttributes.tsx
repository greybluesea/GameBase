import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameDetails } from "../entities/GameDetals";
import GameAttributeItem from "./GameDetailsPage/GameAttributeItem";
import ScoreBadge from "./ScoreBadge";

interface Props {
  gameDetails: GameDetails;
}

const GameAttributes = ({ gameDetails }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <GameAttributeItem term={"Platform"}>
        {gameDetails.parent_platforms?.map((p) => (
          <Text margin={0} key={p.platform.id}>
            {p.platform.name}
          </Text>
        ))}
      </GameAttributeItem>
      <GameAttributeItem term="MetaScore">
        <ScoreBadge score={gameDetails.metacritic}></ScoreBadge>
      </GameAttributeItem>
      <GameAttributeItem term={"Genres"}>
        {gameDetails.genres?.map((g) => (
          <Text margin={0} key={g.id}>
            {g.name}
          </Text>
        ))}
      </GameAttributeItem>
      <GameAttributeItem term={"Publishers"}>
        {gameDetails.publishers?.map((p) => (
          <Text margin={0} key={p.id}>
            {p.name}
          </Text>
        ))}
      </GameAttributeItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
