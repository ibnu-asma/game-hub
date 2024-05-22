import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
    next: string | null,
    count: number,
    results : T[]
}

const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params : {
        key: "c653f58d7bf64a89b4070683dec153ea"
    }
  });

class APIClient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
       return axiosInstance.get<FetchResponse<T>>(this.endpoint,config)
           .then((res)=> res.data);
    }
}

export default APIClient;

  