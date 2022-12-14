import { logDOM } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./api";

function useApi(endpoint) {
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState(false);
  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();
    axios
      .get(`${BASE_URL}${endpoint}`, {
        signal: controller.signal,
      })
      .then(({ data }) => {
        setResponseData(data);
        console.log(data)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
        if (axios.isCancel(err)) {
          return;
        }
        setResponseData(false);
        console.log(err);
      });

          console.log('USE EFFECT')
  }, [endpoint]);

  return [responseData, loading];
}

export default useApi;
