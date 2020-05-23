//REACT
import React from "react";

//LIBS
import PropTypes from "prop-types";

//STYLES
import "./styles.css";

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="info-container">
    <span>{`Humedad: ${humidity}% - `}</span>
    <span>{`Viento: ${wind}`}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;
