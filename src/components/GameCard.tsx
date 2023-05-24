import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";
import getCroppedImageURL from "../utilities/CropImage";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import ScoreBadge from "./ScoreBadge";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link
      to={"games/" + game.slug || game.id.toString()}
      state={{ slug: game.slug, id: game.id }}
    >
      <Card height={"100%"}>
        <Image
          src={getCroppedImageURL(game.background_image)}
          height={"calc(100% - 25px)"}
          minHeight={"200px"}
          objectFit={"cover"}
        />
        <CardBody>
          <Heading fontSize={"3xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms?.map((each) => each.platform)}
            />
            <HStack>
              <Emoji rating={game.rating_top} />
              <ScoreBadge score={game.metacritic} />
            </HStack>
          </HStack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
