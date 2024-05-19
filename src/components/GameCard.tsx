import { Game } from "../hooks/useGame";
import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Imoji } from "./Imoji";

interface Prop {
  game: Game;
}

export const GameCard = ({ game }: Prop) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="3xl">{game.name} <Imoji rating={game.rating_top}></Imoji></Heading>
      </CardBody>
    </Card>
  );
};
