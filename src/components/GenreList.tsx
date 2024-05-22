import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

export const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
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
              onClick={() => onSelectGenre(genre)}
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
