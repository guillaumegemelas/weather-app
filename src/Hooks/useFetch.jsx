import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";

//dans le custom hook, si fichier séparé, je reprends tout le destructuring du useQuery { data, isLoading, isFetching, refetch } dans le ficheir s"paré, ce qui ne serait pas le cas si  le CH eait dans le Home.jsx
const useFetch = () => {
  const [city, setCity] = useState("");

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["data", city],
    queryFn: async () => {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&query=${city}`
      );
      console.log(response.data, "log response.data");
      return response.data;
    },
    enabled: false,
    cacheTime: 0,
  });

  return { data, isLoading, isFetching, refetch, city, setCity };
};

export default useFetch;
