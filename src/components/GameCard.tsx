
import { Text } from '@chakra-ui/react';
import useGame from '../hooks/useGame';



export const GameCard = () => {
     const {games, error} = useGame();
  return (
    <>
     {error && <Text>{error}</Text>}
    <ul>
        {games.map(game => 
            <li key= {game.id}>{game.name}</li>
        )}
    </ul>
    </>
  )
}
