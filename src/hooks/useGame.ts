import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


export interface Game {
    id: number;
    name: string;
    background_image: string
}

interface GameCardResponses {
    results : Game[]
}

const useGame = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState();

    useEffect( () => {
        apiClient.get<GameCardResponses>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message));
    });

    return {games, error};
};

export default useGame;