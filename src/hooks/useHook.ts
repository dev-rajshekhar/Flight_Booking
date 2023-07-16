import {useState, useEffect} from 'react';

type ApiResult<T> = {
  loading: boolean;
  error: string | null;
  data: T | null;
};

const useApi = <T>(url: string): ApiResult<T> => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData: T = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {loading, error, data};
};

export default useApi;
