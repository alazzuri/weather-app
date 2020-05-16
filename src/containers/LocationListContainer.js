import React, { useEffect } from "react";
import PropTypes from "prop-types";
import LocationList from "../components/LocationList";
import { useSelector, useDispatch } from "react-redux";
import { setCity, setWeatherOnCity } from "../actions";
import toPairs from "lodash.topairs";

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

  const transformedData = (data) => {
    return toPairs(data).map(([key, value]) => {
      return {
        key,
        name: key,
        data: value.weatherData ? value.weatherData.data : value.weatherData,
      };
    });
  };

  const handleSelectedLocation = (city) => {
    dispatch(setCity(city));
  };

  return (
    <LocationList
      cities={transformedData(weatherData)}
      onSelectedLocation={handleSelectedLocation}
    />
  );
};

LocationListContainer.propTypes = {
  cities: PropTypes.array,
};

export default LocationListContainer;
