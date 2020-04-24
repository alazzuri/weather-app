import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LocationCardLoader from "../ContentLoaders/WheaterLocationCard";
import Location from "../Location";
import WeatherData from "../WeatherData";
import Card from "@material-ui/core/Card";
import transformWeather from "../../services/transformWheater";
import apiRequest from "../../services/apiRequest";
import { BASE_URL, API_KEY, fakeData } from "../../constants/api_url";

const WeatherLocation = (props) => {
  const { city, eventHandler } = props;
  const initialState = {
    city,
    data: fakeData,
  };
  const [state, setState] = useState(initialState);
  const { data } = state;

  useEffect(() => {
    const abortController = new AbortController();

    const updateForecast = async () => {
      const signal = abortController.signal;
      try {
        const fetchedData = await apiRequest(BASE_URL, API_KEY, city, signal);
        const newState = await transformWeather(fetchedData);
        setState({ ...state, ...newState });
      } catch (err) {
        !abortController.signal.aborted && console.error(err);
      }
    };

    updateForecast();

    return () => {
      abortController.abort();
    };
  }, [city, state]);

  return (
    <Card
      className="bg-light mb-4"
      elevation={4}
      onClick={() => eventHandler()}
    >
      {data ? (
        <>
          <Location city={city} />
          <WeatherData data={data} />
        </>
      ) : (
        <LocationCardLoader className="mx-auto" />
      )}
    </Card>
  );
};

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  eventHandler: PropTypes.func.isRequired,
};
export default WeatherLocation;
