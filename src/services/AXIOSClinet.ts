import axios, { AxiosRequestConfig } from "axios";

export interface ResFromFetch<T> {
  count: number;
  results: T[];
}

const instanceOfAxios = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6dfec956e48b4b14960840e09578d4c5",
  },
});

export default class AXIOSClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (requestConfig: AxiosRequestConfig) => {
    return instanceOfAxios
      .get<ResFromFetch<T>>(this.endpoint, requestConfig)
      .then((res) => res.data);
  };

  /* post = (newData: T) => {
    return instanceOfAxios
      .post<T>(this.endpoint, newData)
      .then((res) => res.data);
  }; */
}
