import React from "react";
import WeatherLocation from "../WeatherLocation/";

const LocationList = () => {
  return (
    <div>
      <WeatherLocation city="Tokio,jpn" />
      <WeatherLocation city="Buenos Aires, ar" />
      <WeatherLocation city="Mexico,mex" />
    </div>
  );
};

export default LocationList;
