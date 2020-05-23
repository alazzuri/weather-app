//REACT
import React from "react";

//LIBS
import PropTypes from "prop-types";
import { Card, Divider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

//COMPONENTS
import ForecastItem from "../ForecastItem";
import ForecastLoader from "../ContentLoaders/ForecastLoader";

//STYLES
import "./styles.css";

const renderForecastDays = (completeForecast) =>
  completeForecast
    ? completeForecast.map((dayForecast) => {
        const {
          weekDay,
          hour,
          data: { data },
        } = dayForecast;

        return (
          <ForecastItem
            key={`${weekDay}${hour}`}
            weekDay={weekDay}
            hour={hour}
            data={data}
          />
        );
      })
    : null;

const ForecastExtended = ({ city, forecastData, isFetching }) => {
  return (
    <Paper elevation={4}>
      <Card>
        <div className="forecast">
          <h2 className="title">Pronostico Extendido</h2>
          <h3>{city}</h3>
          <Divider />
          {isFetching ? (
            <ForecastLoader />
          ) : (
            <div className="scroll">
              {renderForecastDays(forecastData, city)}
            </div>
          )}
        </div>
      </Card>
    </Paper>
  );
};

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
};

export default ForecastExtended;
