import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";


interface Props {
  gameQuery : GameQuery
}

export const GameGrid = ({gameQuery} : Props) => {
  const { data, error, loading } = useGame(gameQuery);
  // const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        spacing="15px"
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding="10px"
      >
        {/* {loading &&
          skeletons.map((Skeleton) => (
            <GameCardSkeleton key={Skeleton}></GameCardSkeleton>
          ))} */}
        {data.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};
