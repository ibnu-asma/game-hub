import { useQuery } from "@tanstack/react-query";


import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => ({data: genres, loading: false, error: null});

// export default useGenres;
const apiClient = new APIClient<Genre>('genres');

const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    // initialData: {results: genres}
  });

     


export default useGenres;
