import { useState } from "react";
import "./App.css";

import useFetchWeather from "./useFetchWeather";

const App = () => {
  const [city, setCity] = useState("");
  const { weather, error, loading, fetchWeather } = useFetchWeather();

  const handleGetWeather = () => {
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="type the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        autoComplete="off"
      />
      <button onClick={handleGetWeather} className="btn">
        <b>Check!</b>
      </button>
      <div id="weather-result">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weather && !error && (
          <div>
            <p>Temperature: {weather.temp}°C</p>
            <p>Condition: {weather.condition}</p>
            <img src={weather.icon} alt="weather icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
