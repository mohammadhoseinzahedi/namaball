import { useState, useEffect } from "react";

export const useFetch = <T>(
  url: string | URL,
  settings?: {
    options?: RequestInit,
    localStorageKey?: string
    refreshTime?: number,
  }
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, settings?.options);
        if (!response.ok) {
          if (response.status == 429) {
            throw new Error('Server is Out of Reach Please Try after 1 Minute') 
          } else throw new Error(`Response Status: ${response.status}`)
        }
        const result = await response.json();
        setData(result);
        if (settings?.localStorageKey) {
          result.localStorageUpdatedAt = Date.now();
          localStorage.setItem(settings.localStorageKey, JSON.stringify(result)); 
        }
      } catch (error) {
        setError(`${error}`);
      } finally {
        setIsloading(false);
      }
    };

    const handleData = () => {
      const localStorageKey = settings?.localStorageKey;

      if (!localStorageKey) {
        fetchData();
        return;
      }

      const localData = localStorage.getItem(localStorageKey);

      if (!localData) {
        fetchData();
        return;
      }

      const refreshTime = settings.refreshTime;

      if(!refreshTime) {
        fetchData();
        return;
      }

      const parsedData = JSON.parse(localData);
      const isRecent = (Date.now() - parsedData.localStorageUpdatedAt) < refreshTime;

      if (isRecent) {
        setData(parsedData);
        setIsloading(false); 
      } else {
        fetchData();
      }
    }

    handleData();

  }, []);

  return { data, error, isLoading };
};
