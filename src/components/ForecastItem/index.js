import React from "react";
import PropTypes from "prop-types";
import WeatherData from "../WeatherData";
import Divider from "@material-ui/core/Divider";

const ForecastItem = ({ weekDay, hour, data }) => {
  return (
    <div className="pt-4">
      <div>
        {weekDay.toUpperCase()} - {hour} hs.
      </div>
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
