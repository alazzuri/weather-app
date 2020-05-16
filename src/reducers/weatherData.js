import { SET_FORECASTDATA, SET_WEATHER_DATA } from "../actions";

export const weatherData = (state = null, action) => {
  console.log(action.type);
  switch (action.type) {
    case SET_FORECASTDATA: {
      const { city, forecastData } = action.value;
      return { ...state, [city]: { ...state[city], ...{ forecastData } } };
    }
    case SET_WEATHER_DATA: {
      const { city, weatherData } = action.value;
      return { ...state, [city]: { ...{ weatherData } } };
    }
    default:
      return state;
  }
};
