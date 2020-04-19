import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Location from "../Location";
import WeatherData from "../WeatherData";
import transformWeather from "../../services/transformWheater";
import apiRequest from "../../services/apiRequest";
import { BASE_URL, API_KEY } from "../../constants/api_url";

const WeatherLocation = (props) => {
  const { city } = props;
  const initialState = {
    city,
    data: null,
  };
  const [state, setState] = useState(initialState);
  const { data } = state;

  const handleUpdateClick = async () => {
    const fetchedData = await apiRequest(BASE_URL, API_KEY, city);
    const newState = await transformWeather(fetchedData);
    setState({ ...state, ...newState });
    console.log("Actualizado");
  };

  useEffect(() => handleUpdateClick(), []);

  return (
    <div className="card bg-light m-2 ">
      <Location city={city} />
      {data ? (
        <WeatherData data={data} />
      ) : (
        <CircularProgress className="mx-auto" />
      )}
    </div>
  );
};

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
};
export default WeatherLocation;
