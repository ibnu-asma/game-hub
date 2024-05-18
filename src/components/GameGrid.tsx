
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGame from '../hooks/useGame';
import { GameCard } from './GameCard';





export const GameGrid = () => {
     const {games, error} = useGame();
  return (
    <>
     {error && <Text>{error}</Text>}
    <SimpleGrid spacing="10px" columns={{sm: 1, md: 2, lg: 3}} padding="10px">
        {games.map(game => 
            <GameCard key= {game.id} game={game}></GameCard>
            
        )}
    </SimpleGrid>
    </>
  )
}
