import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Game {
    id: number;
    name: string
}

interface GameCardResponses {
    results : Game[]
}


export const GameCard = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState();

    useEffect( () => {
        apiClient.get<GameCardResponses>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message));
    })
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
