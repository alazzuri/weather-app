import React from "react";
import PropTypes from "prop-types";
import WeatherData from "../WeatherData";
import Divider from "@material-ui/core/Divider";

const ForecastItem = ({ weekDay, hour, data }) => {
  return (
    <div className="pt-4">
      <h2>
        {weekDay.toUpperCase()} - {hour} hs.
      </h2>
      <WeatherData data={data} className="mb-4" />
      <Divider />
    </div>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};

export default ForecastItem;
