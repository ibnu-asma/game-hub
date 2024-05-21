
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform {
    id:  number;
    name: string;
    slug: string
}


const usePlatform = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platform'],
    queryFn: apiClient.getAll,

    staleTime: 24 * 60 * 60 * 1000, // 1h
    initialData: {results: platforms}
});  
    

export default usePlatform;