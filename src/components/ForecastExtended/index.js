import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ForecastItem from "../ForecastItem";
import { fakeData, FORECAST_URL, API_KEY } from "../../constants/api_url";
import apiRequest from "../../services/apiRequest";

import ForecastLoader from "../ContentLoaders/ForecastLoader";
import transformForecast from "../../services/transformForecast";

const days = ["lunes", "martes", "miercoles", "jueves", "viernes"];

const initialState = {
  data: null,
};

const ForecastExtended = ({ city }) => {
  const [state, setState] = useState(initialState);
  const { data } = state;

  const renderForecastDays = (days) =>
    days.map((day) => <ForecastItem weekDay={day} hour={10} data={data} />);

  useEffect(() => {
    const abortController = new AbortController();

    const updateForecast = async () => {
      const signal = abortController.signal;
      try {
        const fetchedData = await apiRequest(
          FORECAST_URL,
          API_KEY,
          city,
          signal
        );
        const newState = { data: await transformForecast(fetchedData) };

        setState((state) => {
          return { ...state, ...newState };
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
    <div>
      {city ? (
        data ? (
          <div>
            <h2 className="card-header mb-2">Pronostico Extendido</h2>
            <h3>{city}</h3>
            {renderForecastDays(days)}
          </div>
        ) : (
          <ForecastLoader items={days} />
        )
      ) : (
        <div>
          <h2 className="card-header mb-2">Pronostico Extendido</h2>
          <h3>Seleccione ciudad</h3>
        </div>
      )}
    </div>
  );
};

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
