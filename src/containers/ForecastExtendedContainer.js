import React, { useEffect } from "react";
import ForecastExtended from "../components/ForecastExtended";
import { Card, Divider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { setForecastOnCity, setFetchingStatus } from "../actions";

const ForecastExtendedContainer = () => {
  const selectedCity = useSelector((state) => state.selectedCity);
  const weatherData = useSelector((state) => state.weatherData);
  const isFetching = useSelector((state) => state.fetchingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    if (selectedCity) {
      const signal = abortController.signal;
      dispatch(setFetchingStatus(true));
      dispatch(setForecastOnCity(selectedCity, signal));
    }

    return () => {
      abortController.abort();
    };
  }, [selectedCity]);

  return selectedCity ? (
    <ForecastExtended
      className="w-100"
      city={selectedCity}
      forecastData={weatherData[selectedCity].forecastData}
      isFetching={isFetching}
    />
  ) : (
    <Paper elevation={4}>
      <Card className="card">
        <div className="forecast">
          <h2 className="card-header mb-2">Pronostico Extendido</h2>
          <h3>Seleccione ciudad</h3>
          <Divider />
        </div>
      </Card>
    </Paper>
  );
};

export default ForecastExtendedContainer;
