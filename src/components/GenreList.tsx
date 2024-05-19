import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, loading } = useGenres();
  if (loading) return <Spinner></Spinner>;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius="10px"
            ></Image>
            <Button
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              variant="link"
              onClick={() => onSelectGenre(genre)}
              fontSize="medium"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
