import React, { useContext } from "react";
import { Context } from "../Context";

export const WeatherSearch = () => {
  const { apiCall } = useContext(Context);

  return (
    <div className="weather-search">
      <form className="weather-search__form" onSubmit={apiCall}>
        <input
          autoComplete="off"
          className="weather-search__input"
          type="text"
          name="location"
        />
        <div className="weather-search__submit">
          <button className="weather-search__button">&rarr;</button>
        </div>
      </form>
    </div>
  );
};
