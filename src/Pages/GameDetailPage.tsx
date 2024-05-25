import { generatePath, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { ExpandableText } from "../components/ExpandableText";
import { DefinitionItem } from "../components/DefinitionItem";
import { CriticScore } from "../components/CriticScore";
import { GameAttributes } from "../components/GameAttributes";

export const GameDetailPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      
    </>
  );
};
