import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";
import { Screenshot } from "../entities/Screenshots";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>('/games');
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => apiClient.getScreenshots(gameId),
  });
};

export default useScreenshots;
