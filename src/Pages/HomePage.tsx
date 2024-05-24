import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { GameGrid } from '../components/GameGrid';
import { GameHeading } from '../components/GameHeading';
import { GenreList } from '../components/GenreList';
import { PlatformSelector } from '../components/PlatformSelector';
import { SortSelector } from '../components/SortSelector';

export const HomePage = () => {
    return (
        <Grid
          templateAreas={{
            base: `"main"`,
            lg: `"aside main"`,
          }}
        >
          <Show above="lg">
            <GridItem area="aside" paddingX={5} width="200px">
              <GenreList
              ></GenreList>
            </GridItem>
          </Show>
          <GridItem area="main">
            <Box paddingLeft={2}>
              <HStack spacing={5} marginBottom={3}>
                <GameHeading />
                <PlatformSelector />
                <SortSelector />
              </HStack>
            </Box>
            <GameGrid />
          </GridItem>
        </Grid>
      );
}
