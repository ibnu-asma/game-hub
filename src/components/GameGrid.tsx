import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { GameCard } from "./GameCard";

import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

export const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGame(gameQuery);
  // const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <Box padding="10px">
      {error && <Text>{error.message}</Text>}

      <SimpleGrid
        spacing="15px"
        columns={{ sm: 1, md: 2, lg: 3 }}
      >
        {/* {loading &&
          skeletons.map((Skeleton) => (
            <GameCardSkeleton key={Skeleton}></GameCardSkeleton>
          ))} */}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game}></GameCard>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button disabled={isFetchingNextPage} onClick={() => fetchNextPage()} marginY={3}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};
