import React from "react";

import { Card, CardBody, Heading, Image, Text, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import ScoreBadge from "./ScoreBadge";
import getCroppedImageURL from "../hooks/CropImage";
import Emoji from "./Emoji";
import { Game } from "../services/axiosClientForGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card /* borderRadius={10} overflow={"hidden"} */ height={"100%"}>
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
            platforms={game.parent_platforms.map((each) => each.platform)}
          />
          <HStack>
            <Emoji rating={game.rating_top} />
            <ScoreBadge score={game.metacritic} />
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
