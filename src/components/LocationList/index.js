//REACT
import React from "react";

//LIBS
import PropTypes from "prop-types";

//COMPONENTS
import WeatherLocation from "../WeatherLocation/";

//STYLES
import "./styles.css";

const LocationList = ({ cities, onSelectedLocation }) => {
  const clickEventHanlder = (city) => {
    return onSelectedLocation(city);
  };

  return (
    <div className="list-container">
      {cities.map((city) => (
        <WeatherLocation
          city={city.name}
          data={city.data}
          key={city.key}
          eventHandler={() => clickEventHanlder(city.name)}
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
