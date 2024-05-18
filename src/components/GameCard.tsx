import { Game } from "../hooks/useGame";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  Hide,
  Heading,
} from "@chakra-ui/react";

interface Prop {
  game: Game;
}

export const GameCard = ({ game }: Prop) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize='4xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
