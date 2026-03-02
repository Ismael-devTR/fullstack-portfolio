import { useEffect, useState } from "react";

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function request() {
      setLoading(true);
      try {
        const response = await fetch(url);
        const dataJson: T[] = await response.json() || [];
        setData(dataJson);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }

    request();
  }, [url]);

  return [data, loading, error] as const;
};
