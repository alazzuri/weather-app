import React from "react";
import WeatherExtraInfo from "../WeatherExtraInfo";
import WeatherTemperature from "../WeatherTemperature";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
} from "../../constants/weathers";

const WeatherData = () => (
  <div className="card-body">
    <WeatherTemperature temperature={20} weatherState={CLOUD} />
    <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
  </div>
);

export default WeatherData;
