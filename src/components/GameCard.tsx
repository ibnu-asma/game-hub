import { Game } from "../hooks/useGame";
import { Card, CardBody, Image, Heading } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";

interface Prop {
  game: Game;
}

export const GameCard = ({ game }: Prop) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="4xl">{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
      </CardBody>
    </Card>
  );
};
