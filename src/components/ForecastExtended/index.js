import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ForecastItem from "../ForecastItem";

import ForecastLoader from "../ContentLoaders/ForecastLoader";
import { Card, Divider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCity, setFetchingStatus } from "../../actions";

const ForecastExtended = ({ city }) => {
  const forecastData = useSelector((state) => state.forecastData);
  const isFetching = useSelector((state) => state.fetchingStatus);
  const dispatch = useDispatch();

  const renderForecastDays = (completeForecast, city) =>
    completeForecast && completeForecast[city]
      ? completeForecast[city].map((dayForecast) => {
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

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    dispatch(setFetchingStatus(true));
    dispatch(setSelectedCity(city, signal));
    return () => {
      abortController.abort();
      console.log("Aborted");
    };
  }, [city, dispatch]);

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
            renderForecastDays(forecastData, city)
          )}
        </div>
      </Card>
    </Paper>
  );
};

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
