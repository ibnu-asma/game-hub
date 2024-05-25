import { SimpleGrid, GridItem } from '@chakra-ui/react'
import { CriticScore } from './CriticScore'
import { DefinitionItem } from './DefinitionItem'
import  Game  from '../entities/Game'
import {Text} from "@chakra-ui/react"
interface Props {
    game: Game
}

export const GameAttributes = ({game}  : Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
        <GridItem>
          <DefinitionItem term="Platforms">
            {game.parent_platforms.map(({ platform }) => (
              <Text key={platform.id}>{platform.name}</Text>
            ))}
          </DefinitionItem>
        </GridItem>
        <GridItem>
          <DefinitionItem term="Metascore">
            <CriticScore score={game.metacritic}></CriticScore>
          </DefinitionItem>
        </GridItem>

        <GridItem>
          <DefinitionItem term="Genre">
            {game.genres.map((genre) => (
              <Text key={genre.id}>{genre.name}</Text>
            ))}
          </DefinitionItem>
        </GridItem>

        <GridItem>
          <DefinitionItem term="Publishers">
            {game.publishers.map((publisher) => (
              <Text key={publisher.id}>{publisher.name}</Text>
            ))}
          </DefinitionItem>
        </GridItem>
      </SimpleGrid>
  )
}
