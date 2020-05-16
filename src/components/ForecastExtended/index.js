import React from "react";
import PropTypes from "prop-types";
import ForecastItem from "../ForecastItem";

import ForecastLoader from "../ContentLoaders/ForecastLoader";
import { Card, Divider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

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
      <Card className="card">
        <div className="forecast">
          <h2 className="card-header mb-2">Pronostico Extendido</h2>
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
