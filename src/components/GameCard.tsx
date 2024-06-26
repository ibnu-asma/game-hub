import  Game  from "../entities/Game";
import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Imoji } from "./Imoji";
import { Link } from "react-router-dom";

interface Prop {
  game: Game;
}

export const GameCard = ({ game }: Prop) => {
  return (
    <Card
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      borderRadius="10px"
      overflow="hidden"
    >
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          {game.name} <Imoji rating={game.rating_top}></Imoji>
        </Heading>
      </CardBody>
    </Card>
  );
};
