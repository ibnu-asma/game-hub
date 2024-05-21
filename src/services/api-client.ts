import axios from "axios";
export interface FetchResponse<T> {
    results : T[]
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params : {
        key: "c653f58d7bf64a89b4070683dec153ea"
    }
  });

  