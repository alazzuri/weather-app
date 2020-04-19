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
  [THUNDER]: "day-thunderstore",
  [DRIZZLE]: "day-showers",
};

const getWeatherIcon = (weatherState) => {
  const icon = icons[weatherState];

  const sizeIcon = "4x";
  if (icon) {
    return (
      <WeaterIcons
        className={`${icon === "day-sunny" ? "text-warning" : "text-info"}`}
        name={icon}
        size={sizeIcon}
      />
    );
  } else {
    return (
      <WeaterIcons
        className="text-warning"
        name={"day-sunny"}
        size={sizeIcon}
      />
    );
  }
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="card-title column">
    {getWeatherIcon(weatherState)}
    <span className="font-weight-bold h4">{`${temperature} C°`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
