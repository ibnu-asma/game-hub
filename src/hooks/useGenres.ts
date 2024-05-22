import { useQuery } from "@tanstack/react-query";


import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

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
    staleTime: ms('24h'), // 24h
    initialData: genres
  });

export default useGenres;