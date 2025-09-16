import { useState } from "react";

const API_KEY = "9fcf6f92bf8b99be5353da65c3f19df0";

const useFetchWeather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);

      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeather({
        temp: data.main.temp,
        condition: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      });
    } catch (error) {
      setError(error.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return { weather, error, loading, fetchWeather };
};

export default useFetchWeather;
