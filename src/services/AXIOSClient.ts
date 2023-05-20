import axios, { AxiosRequestConfig } from "axios";

export interface DataFromFetch<T> {
  count: number;
  next?: string | null;
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
      .get<DataFromFetch<T>>(this.endpoint, requestConfig)
      .then((res) => res.data);
  };

  /* post = (newData: T) => {
    return instanceOfAxios
      .post<T>(this.endpoint, newData)
      .then((res) => res.data);
  }; */
}

export class AXIOSClientForGameDetails<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (id: number) => {
    return instanceOfAxios
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}
