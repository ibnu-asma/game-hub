import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";

export const GameGrid = () => {
  const { games, error, loading } = useGame();
  // const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        spacing="10px"
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding="10px"
      >
        {/* {loading &&
          skeletons.map((Skeleton) => (
            <GameCardSkeleton key={Skeleton}></GameCardSkeleton>
          ))} */}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};
