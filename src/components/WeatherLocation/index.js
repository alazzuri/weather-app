import React from "react";
import PropTypes from "prop-types";
import LocationCardLoader from "../ContentLoaders/WheaterLocationCard";
import Location from "../Location";
import WeatherData from "../WeatherData";
import Card from "@material-ui/core/Card";

const WeatherLocation = ({ city, eventHandler, data }) => {
  return (
    <Card
      className="bg-light mb-4"
      elevation={4}
      onClick={() => eventHandler()}
    >
      {data ? (
        <>
          <Location city={city} />
          <WeatherData data={data} />
        </>
      ) : (
        <LocationCardLoader className="mx-auto" />
      )}
    </Card>
  );
};

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  eventHandler: PropTypes.func.isRequired,
};

export default WeatherLocation;
