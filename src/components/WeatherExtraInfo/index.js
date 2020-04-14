import React from "react";
import PropTypes from "prop-types";

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="card-text font-italic">
    <span>{`Humedad: ${humidity}% - `}</span>
    <span>{`Viento: ${wind}`}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;
