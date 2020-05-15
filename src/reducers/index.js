import { combineReducers } from "redux";
import { selectedCity } from "./selectedCity";
import { forecastData } from "./forecastData";
import { savedCities } from "./savedCities";
import { fetchingStatus } from "./fetchingStatus";

export default combineReducers({
  savedCities,
  forecastData,
  selectedCity,
  fetchingStatus,
});
