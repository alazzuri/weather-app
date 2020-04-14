import React from "react";
import Location from "../Location";
import WeatherData from "../WeatherData";

const WeatherLocation = () => (
  <div className="card bg-light m-2 ">
    <Location city={"Córdoba"} />
    <WeatherData />
  </div>
);

export default WeatherLocation;
