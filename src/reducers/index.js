import { combineReducers } from "redux";
import { selectedCity } from "./selectedCity";
import { weatherData } from "./weatherData";
import { savedCities } from "./savedCities";
import { fetchingStatus } from "./fetchingStatus";

export default combineReducers({
  savedCities,
  weatherData,
  selectedCity,
  fetchingStatus,
});
