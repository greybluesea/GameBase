import { useEffect, useState } from "react";
import APIClient from "../../APIservices/unused/APIClient";
import { AxiosRequestConfig, CanceledError } from "axios";

/* export */ interface FetchDataRes<DataObjectType> {
  count: number;
  results: DataObjectType[];
}

const useFetchData = <DataObjectType>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<DataObjectType[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      APIClient.get<FetchDataRes<DataObjectType>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      return () => {
        controller.abort();
        setLoading(false);
      };
    },
    deps ? [...deps] : []
    /*  requestConfig?.params?.genres ? [requestConfig.params.genres] : [] */
    /* [requestConfig?.params.genres, requestConfig?.params.platforms] */
  );

  return { data, error, isLoading };
};

export default useFetchData;
