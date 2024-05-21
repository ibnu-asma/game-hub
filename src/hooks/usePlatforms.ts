
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
    id:  number;
    name: string;
    slug: string
}


const usePlatform = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platform'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
    .then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000, // 1h
    initialData: {results: platforms}
});  
    

export default usePlatform;