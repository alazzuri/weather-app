import React, { useEffect } from "react";
import PropTypes from "prop-types";
import LocationList from "../components/LocationList";
import { useSelector, useDispatch } from "react-redux";
import { setCity, setWeatherOnCity } from "../actions";

export const LocationListContainer = () => {
  const cities = useSelector((state) => state.savedCities);
  const weatherData = useSelector((state) => state.weatherData);
  const dispatch = useDispatch();

  useEffect(() => {
    cities.forEach(async (city) => {
      dispatch(setWeatherOnCity(city));
    });

    return () => {};
  }, [cities]);

  const transformedData = (data, cities) => {
    const transformedData = [];
    cities.forEach((city) => {
      for (const key in data) {
        if (data.hasOwnProperty(key) && key === city) {
          const weatherInfo = data[key].weatherData;
          transformedData.push({
            key,
            name: key,
            data: weatherInfo ? weatherInfo.data : weatherInfo,
          });
        }
      }
    });

    return transformedData;
  };

  const handleSelectedLocation = (city) => {
    dispatch(setCity(city));
  };

  return (
    <LocationList
      cities={transformedData(weatherData, cities)}
      onSelectedLocation={handleSelectedLocation}
    />
  );
};

LocationListContainer.propTypes = {
  cities: PropTypes.array,
};

export default LocationListContainer;
