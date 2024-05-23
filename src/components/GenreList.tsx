import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../stores/gameQueryStore";

export const GenreList = () => {
  const selectedGenreId  = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId  = useGameQueryStore(s=> s.setGenreId);
  const { data,isLoading } = useGenres();
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
    
    <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
    <List>
      debugger;
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius="10px"
              objectFit='cover'
            ></Image>
            <Button
              fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
              variant="link"
              onClick={() => setSelectedGenreId(genre.id)}
              fontSize="medium"
              whiteSpace="normal"
              textAlign={"left"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>

);
};
