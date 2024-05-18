import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id:  number;
    name: string;
    slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform : Platform }[];
    metacritic: number
}



interface FetchResponse<T> {
    results : T[]
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal })
            .then(res => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
        return () => controller.abort();
    });

    return {data, error, loading};
};

export default useData;