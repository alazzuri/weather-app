//REACT
import React from "react";

//LIBS
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";

//COMPONENTS
import WeatherData from "../WeatherData";

//STYLES
import "./styles.css";

const ForecastItem = ({ weekDay, hour, data }) => {
  return (
    <div className="forecast-container">
      <h2>
        {weekDay.toUpperCase()} - {hour} hs.
      </h2>
      <WeatherData data={data} />
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
