import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ForecastItem from "../ForecastItem";
import { FORECAST_URL, API_KEY } from "../../constants/api_url";
import apiRequest from "../../services/apiRequest";

import ForecastLoader from "../ContentLoaders/ForecastLoader";
import transformForecast from "../../services/transformForecast";
import { Card, Divider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import "./styles.css";

const initialState = {
  forecast: null,
};

const ForecastExtended = ({ city }) => {
  const [state, setState] = useState(initialState);
  const { forecast } = state;

  const renderForecastDays = (completeForecast) =>
    completeForecast.map((dayForecast) => {
      const {
        weekDay,
        hour,
        data: { data },
      } = dayForecast;

      return <ForecastItem weekDay={weekDay} hour={hour} data={data} />;
    });

  useEffect(() => {
    const abortController = new AbortController();
    setState((state) => {
      return { ...state, ...{ forecast: null } };
    });

    const updateForecast = async () => {
      const signal = abortController.signal;
      try {
        const fetchedData = await apiRequest(
          FORECAST_URL,
          API_KEY,
          city,
          signal
        );
        const forecast = await transformForecast(fetchedData);

        setState((state) => {
          return { ...state, ...{ forecast } };
        });
      } catch (err) {
        !abortController.signal.aborted && console.error(err);
      }
    };

    city && updateForecast();

    return () => {
      abortController.abort();
    };
  }, [city]);

  return (
    <Paper elevation={4}>
      <Card className="card">
        {city ? (
          forecast ? (
            <div className="forecast">
              <h2 className="card-header mb-2">Pronostico Extendido</h2>
              <h3>{city}</h3>
              <Divider />
              {renderForecastDays(forecast)}
            </div>
          ) : (
            <ForecastLoader />
          )
        ) : (
          <div className="forecast">
            <h2 className="card-header mb-2">Pronostico Extendido</h2>
            <h3>Seleccione ciudad</h3>
          </div>
        )}
      </Card>
    </Paper>
  );
};

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
