import React from "react";
import PropTypes from "prop-types";
import WeatherLocation from "../WeatherLocation/";
import "./styles.css";

const LocationList = ({ cities, onSelectedLocation }) => {
  const clickEventHanlder = (city) => {
    return onSelectedLocation(city);
  };

  return (
    <div className="list-container">
      {cities.map((city) => (
        <WeatherLocation
          className="location-card"
          city={city}
          key={city}
          eventHandler={() => clickEventHanlder(city)}
        />
      ))}
    </div>
  );
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func.isRequired,
};

export default LocationList;
