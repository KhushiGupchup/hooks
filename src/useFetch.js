//creating the custom hook with name useFetch

import { useState, useEffect, useCallback } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = useCallback(() => {
    setLoading(true);//first to fetch data from api it will take time so loading will come
   //here url is taken from App.jsx file which will call the custom hook and load all data
    
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d);//get all data from api and show
        setLoading(false);//loading will not shown
      })
      .catch(() => {
        setError("Failed to load");//network issue will show this
        setLoading(false);//no loading will show
      });
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
}

export default useFetch;

