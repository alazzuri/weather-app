//REACT
import React from "react";

//LIBS
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";

//COMPONENTS
import LocationCardLoader from "../ContentLoaders/WheaterLocationCard";
import Location from "../Location";
import WeatherData from "../WeatherData";

//STYLES
import "./styles.css";

const WeatherLocation = ({ city, eventHandler, data }) => {
  return (
    <Card
      className="location-container"
      elevation={4}
      onClick={() => eventHandler()}
    >
      {data ? (
        <>
          <Location city={city} />
          <WeatherData data={data} />
        </>
      ) : (
        <LocationCardLoader />
      )}
    </Card>
  );
};

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  eventHandler: PropTypes.func.isRequired,
};

export default WeatherLocation;
