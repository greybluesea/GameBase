import axios, { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";

export interface DataFromFetch<T> {
  count: number;
  next?: string | null;
  results: T[];
}

const instanceOfAxios = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_KEY,
  },
});

export default class AXIOSClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (requestConfig?: AxiosRequestConfig) => {
    return instanceOfAxios
      .get<DataFromFetch<T>>(this.endpoint, requestConfig)
      .then((res) => res.data);
  };

  /* post = (newData: T) => {
    return instanceOfAxios
      .post<T>(this.endpoint, newData)
      .then((res) => res.data);
  }; */
  getDetails = (id: number | string) => {
    return instanceOfAxios
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}
