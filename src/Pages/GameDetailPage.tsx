import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ExpandableText } from "../components/ExpandableText";
import useGame from "../hooks/useGame";

import { GameAttributes } from "../components/GameAttributes";
import { GameTrailer } from "../components/GameTrailer";
import { GameScreenshots } from "../components/GameScreenshots";

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
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId= {game.id} />
      
    </>
  );
};
