import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LocationCardLoader from "../ContentLoaders/WheaterLocationCard";
import Location from "../Location";
import WeatherData from "../WeatherData";
import transformWeather from "../../services/transformWheater";
import apiRequest from "../../services/apiRequest";
import { BASE_URL, API_KEY } from "../../constants/api_url";

const WeatherLocation = (props) => {
  const { city, eventHandler } = props;
  console.log(props);

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
    <div className="card bg-light m-2 " onClick={() => eventHandler()}>
      {data ? (
        <>
          <Location city={city} />
          <WeatherData data={data} />
        </>
      ) : (
        <LocationCardLoader className="mx-auto" />
      )}
    </div>
  );
};

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  eventHandler: PropTypes.func.isRequired,
};
export default WeatherLocation;
