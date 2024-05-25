import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";


interface Props {
  gameId: number;
}

export const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return  (
       <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
        {data?.results.map(file => <Image key={file.id} src={file.image}></Image>)}
       </SimpleGrid>
  ) ;
};



// {data?.pages.map((page, index) => (
//     <React.Fragment key={index}>
//       {page.results.map((game) => (
//         <GameCard key={game.id} game={game}></GameCard>
//       ))}
//     </React.Fragment>
//   ))}