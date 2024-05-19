import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

export const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((d) => (
        <ListItem key={d.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(d.image_background)}
              boxSize="32px"
              borderRadius="10px"
            ></Image>
            <Text fontSize="medium">{d.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
