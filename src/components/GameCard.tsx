import { Game } from "../hooks/useGame";
import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Prop {
  game: Game;
}

export const GameCard = ({ game }: Prop) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="4xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
        <CriticScore score={game.metacritic}></CriticScore>
          
        </HStack>
      </CardBody>
    </Card>
  );
};
