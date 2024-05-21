import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { GameCard } from "./GameCard";

import { GameQuery } from "../App";


interface Props {
  gameQuery : GameQuery
}

export const GameGrid = ({gameQuery} : Props) => {
  const { data, error } = useGame(gameQuery);
  // const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error.message}</Text>}

      <SimpleGrid
        spacing="15px"
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding="10px"
      >
        {/* {loading &&
          skeletons.map((Skeleton) => (
            <GameCardSkeleton key={Skeleton}></GameCardSkeleton>
          ))} */}
        {data?.results.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};
