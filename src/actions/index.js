import { apiRequest } from "../services/apiRequest";
import { FORECAST_URL, API_KEY, BASE_URL } from "../constants/api_url";
import transformWeather from "../services/transformWheater";
import transformForecast from "../services/transformForecast";

export const SET_CITY = "SET_CITY";
export const SET_FORECASTDATA = "SET_FORECASTDATA";
export const SET_WEATHER_DATA = "SET_WEATHER_DATA";
export const SET_SAVED_CITY = "SET_SAVED_CITY";
export const SET_FETCHING_STATUS = "SET_FETCHING_STATUS";

export const setCity = (value) => ({
  type: SET_CITY,
  value,
});

export const setForecastData = (value) => ({
  type: SET_FORECASTDATA,
  value,
});

export const setWeatherData = (value) => ({
  type: SET_WEATHER_DATA,
  value,
});

export const setFetchingStatus = (value) => ({
  type: SET_FETCHING_STATUS,
  value,
});

export const setSavedCity = (value) => ({
  type: SET_SAVED_CITY,
  value,
});

export const setForecastOnCity = (value, signal) => (dispatch, getState) => {
  const state = getState();

  const lastFetch =
    state.weatherData[value] && state.weatherData[value].forecastDataDate;

  const currenTime = new Date();

  if (lastFetch && currenTime - lastFetch < 60000) {
    return dispatch(setFetchingStatus(false));
  }

  const updateForecast = async () => {
    try {
      const fetchedData = await apiRequest(
        FORECAST_URL,
        API_KEY,
        value,
        signal
      );
      const forecastData = await transformForecast(fetchedData);
      dispatch(setForecastData({ city: value, forecastData }));
      dispatch(setFetchingStatus(false));
    } catch (err) {
      !signal.aborted && console.error(err);
    }
  };

  return updateForecast();
};

export const setWeatherOnCity = (value, signal) => (dispatch) => {
  const getWeatherData = async () => {
    try {
      const fetchedData = await apiRequest(BASE_URL, API_KEY, value, signal);
      const weatherData = await transformWeather(fetchedData);
      dispatch(setWeatherData({ city: value, weatherData }));
    } catch (err) {
      dispatch(setWeatherData({ city: value, weatherData: null }));
    }
  };

  return getWeatherData();
};
