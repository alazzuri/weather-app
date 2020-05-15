import React from "react";
import PropTypes from "prop-types";
import LocationList from "../components/LocationList";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../actions";

export const LocationListContainer = () => {
  const cities = useSelector((state) => state.savedCities);
  const dispatch = useDispatch();
  const handleSelectedLocation = (city) => {
    dispatch(setCity(city));
  };

  return (
    <LocationList cities={cities} onSelectedLocation={handleSelectedLocation} />
  );
};

LocationListContainer.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default LocationListContainer;
