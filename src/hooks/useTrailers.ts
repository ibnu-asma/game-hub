import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>("/games");
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: () => apiClient.getTrailer(gameId),
  });
};

export default useTrailers;
