import React, { useState } from "react";
import { Header } from "./Header";
import axios from "axios";
import { Content } from "./Content";
import { WeatherSearch } from "./WeatherSearch";
import { WeatherData } from "./WeatherData";
import { Error } from "./Error";
import { Context } from "../Context";
import { DateTime } from "./DateTime";
import { Tagline } from "./Tagline";

export const Main = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();

  const apiCall = async (e) => {
    e.preventDefault();

    if (!e.target.elements.location.value)
      return setError("Please enter the name of the city"), setWeather(null);

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${e?.target.elements.location.value}&appid=8f838f8b6c6a64e8186c2cc807514892&units=metric`
    );
    setWeather(response?.data.main);
    setCity(response?.data.name);
    setError(null);
  };

  //   weather && console.log(weather);
  //   city && console.log(city);

  return (
    <div className="main">
      <Header />
      <Content>
        <DateTime />
        <Tagline />
        <Context.Provider value={{ apiCall, weather, city }}>
          <WeatherSearch />
          {weather && <WeatherData />}
          {error && <Error error={error} />}
        </Context.Provider>
      </Content>
    </div>
  );
};
