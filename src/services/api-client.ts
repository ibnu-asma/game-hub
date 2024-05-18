import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params : {
        key: "2667e355d9ef4dea9652b83d7ce43e0a"
    }
  });

  