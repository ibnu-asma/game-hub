import { Badge } from '@chakra-ui/react'

interface Prop {
    score: number;
}

export const CriticScore = ( { score } : Prop) => {
    let color = score > 75 ? 'green' : score > 65 ? 'yellow' : ' ';
  return (
    <Badge colorScheme= {color} fontSize= {16}>{ score }</Badge>
  )
}
