import React from "react";

import {
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  HStack,
  transform,
  transition,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import ScoreBadge from "./ScoreBadge";
import getCroppedImageURL from "../hooks/CropImage";
import Emoji from "./Emoji";
import { Game } from "../entities/Game";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link
      to={"games/" + game.slug || game.id.toString()}
      state={{ id: game.id }}
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
