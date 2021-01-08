import React from "react";

export const WeatherSearch = ({ apiCall }) => (
  <div className="weather-search">
    <form className="weather-search__form" onSubmit={apiCall}>
      <input autoComplete="off" className="weather-search__input" type="text" />
      <div className="weather-search__submit">
        <button className="weather-search__button">&rarr;</button>
      </div>
    </form>
  </div>
);
