import React from "react";
import WeaterIcons from "react-weathericons";
import PropTypes from "prop-types";
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from "../../constants/weathers";

import "./styles.css";

const icons = {
  [CLOUD]: "cloud",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [THUNDER]: "day-thunderstorm",
  [DRIZZLE]: "day-showers",
};

const getWeatherIcon = (weatherState) => {
  const icon = icons[weatherState];

  const sizeIcon = "4x";
  if (icon) {
    return (
      <WeaterIcons
        className={`${icon === "day-sunny" ? "icon-yellow" : "icon-green"}`}
        name={icon}
        size={sizeIcon}
      />
    );
  } else {
    return (
      <WeaterIcons className="text-green" name={"cloud"} size={sizeIcon} />
    );
  }
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="temp-container">
    {getWeatherIcon(weatherState)}
    <span className="temperature">{`${temperature} C°`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
