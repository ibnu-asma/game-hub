import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { GameCard } from "./GameCard";
import InfiniteScroll from "react-infinite-scroll-component";

import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

export const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, fetchNextPage, hasNextPage } =
    useGame(gameQuery);
  // const skeletons = [1, 2, 3, 4, 5, 6];

  const fetchedGamesCount = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  ) || 0;
  return (
    <Box padding="10px">
      {error && <Text>{error.message}</Text>}

      {/* {loading &&
          skeletons.map((Skeleton) => (
            <GameCardSkeleton key={Skeleton}></GameCardSkeleton>
          ))} */}

      <InfiniteScroll
        dataLength={fetchedGamesCount} //This is important field to render the next data
        next={fetchNextPage}
        loader={<h4>Loading...</h4>}
        hasMore={hasNextPage}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <SimpleGrid spacing="15px" columns={{ sm: 1, md: 2, lg: 3 }}>
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game}></GameCard>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};
