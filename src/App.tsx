import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";

function App() {

   const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGnere={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
