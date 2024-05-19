
import useData, { Platform } from "./useData";


const usePlatform = () => useData<Platform>("/platforms");

export default usePlatform;