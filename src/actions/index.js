import { apiRequest } from "../services/apiRequest";
import { FORECAST_URL, API_KEY } from "../constants/api_url";
import transformForecast from "../services/transformForecast";

export const SET_CITY = "SET_CITY";
export const SET_ABORTCONTROLLER = "SET_ABORTCONTROLLER";
export const SET_FORECASTDATA = "SET_FORECASTDATA";

export const setCity = (value) => ({
  type: SET_CITY,
  value,
});

export const setForecastData = (value) => ({
  type: SET_FORECASTDATA,
  value,
});

export const fetchForecast = (value, signal) => (dispatch) => {
  const updateForecast = async () => {
    try {
      const fetchedData = await apiRequest(
        FORECAST_URL,
        API_KEY,
        value,
        signal
      );
      const forecastData = await transformForecast(fetchedData);
      dispatch(setForecastData(forecastData));
    } catch (err) {
      !signal.aborted && console.error(err);
    }
  };

  return value && updateForecast();
};
