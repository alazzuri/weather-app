import React, { useState } from "react";
import Location from "../Location";
import WeatherData from "../WeatherData";
import { CLOUD, SUN } from "../../constants/weathers";

const location = "Buenos Aires, ar";
const API_KEY = "be17545c076e7632e2dd8be50b4ed740";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const apiRequest = async (baseUrl, apiKey, location) => {
  const path = `${baseUrl}?q=${location}&appid=${apiKey}`;
  const response = await fetch(path);
  const data = await response.json();
  return data;
};

const data = {
  temperature: 30,
  weatherState: CLOUD,
  humidity: 90,
  wind: "10 m/s",
};

const initialState = {
  city: "Buenos Aires",
  data: data,
};

const newState = {
  // city: "Córdoba",
  data: {
    temperature: 35,
    weatherState: SUN,
    humidity: 20,
    wind: "20 m/s",
  },
};

const WeatherLocation = () => {
  const [state, setState] = useState(initialState);
  const { city, data } = state;

  const handleUpdateClick = async () => {
    console.log("Actualizado");
    setState({ ...state, ...newState });
    console.log(await apiRequest(BASE_URL, API_KEY, location));
  };

  return (
    <div className="card bg-light m-2 ">
      <Location city={city} />
      <WeatherData data={data} />
      <button
        className="btn btn-primary w-25 mx-auto"
        onClick={handleUpdateClick}
      >
        Actualizar
      </button>
    </div>
  );
};

export default WeatherLocation;
