import React, { useState } from "react";
import { Header } from "./Header";
import axios from "axios";
import { Content } from "./Content";
import { WeatherSearch } from "./WeatherSearch";
import { WeatherData } from "./WeatherData";

export const Main = () => {
  const [weather, setWeather] = useState();

  const apiCall = async (e) => {
    e.preventDefault();
    setWeather(
      await axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=London&appid=8f838f8b6c6a64e8186c2cc807514892"
        )
        .then((res) => res?.data.main)
    );
  };

  weather && console.log(weather);

  return (
    <div className="main">
      <Header />
      <Content>
        <WeatherSearch apiCall={apiCall} />
        {weather && <WeatherData weather={weather} />}
      </Content>
    </div>
  );
};
