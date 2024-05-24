import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import React from "react";

export const GameGrid = () => {
  const { data, error, fetchNextPage, hasNextPage } = useGames();
  // const skeletons = [1, 2, 3, 4, 5, 6];

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
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
        loader={<Spinner></Spinner>}
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
