import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ForecastItem from "../ForecastItem";

import ForecastLoader from "../ContentLoaders/ForecastLoader";
import { Card, Divider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchForecast } from "../../actions";

const ForecastExtended = ({ city }) => {
  const forecastData = useSelector((state) => state.forecastData);
  const dispatch = useDispatch();

  const renderForecastDays = (completeForecast) =>
    completeForecast.map((dayForecast) => {
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
    });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    dispatch(fetchForecast(city, signal));
    return () => {
      abortController.abort();
    };
  }, [city, dispatch]);

  return (
    <Paper elevation={4}>
      <Card className="card">
        <div className="forecast">
          <h2 className="card-header mb-2">Pronostico Extendido</h2>
          <h3>{city}</h3>
          <Divider />
          {forecastData ? renderForecastDays(forecastData) : <ForecastLoader />}
        </div>
      </Card>
    </Paper>
  );
};

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
