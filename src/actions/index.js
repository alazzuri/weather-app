import { apiRequest } from "../services/apiRequest";
import { FORECAST_URL, API_KEY } from "../constants/api_url";
import transformForecast from "../services/transformForecast";

export const SET_CITY = "SET_CITY";
export const SET_FORECASTDATA = "SET_FORECASTDATA";
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

export const setFetchingStatus = (value) => ({
  type: SET_FETCHING_STATUS,
  value,
});

export const setSelectedCity = (value, signal) => (dispatch) => {
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
