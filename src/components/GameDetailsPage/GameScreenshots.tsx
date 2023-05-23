import { SimpleGrid } from "@chakra-ui/react";
import useFetchGameScreenshots from "../../hooks/useFetchGameSreenshots";

interface Props {
  slug: string;
}

const GameScreenshots = ({ slug }: Props) => {
  const { gameScreenshots, error, isLoading } = useFetchGameScreenshots(slug);
  if (isLoading) return null;
  if (error) return null;

  return gameScreenshots ? (
    <SimpleGrid columns={{ base: 1 /* , md: 2 */ }} spacing={3}>
      {gameScreenshots.results.map((each) => (
        <img
          key={each.id}
          src={each.image}
          className="d-block w-100"
          alt={"image-" + each.id + " for " + slug}
        />
      ))}
    </SimpleGrid>
  ) : null;
};
export default GameScreenshots;
