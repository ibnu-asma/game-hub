
import useData from "./useData";

export interface usePlatforms {
    id: number;
    name: string;
    slug: string
}


const usePlatforms = () => useData<usePlatforms>("/platforms");

export default usePlatforms;