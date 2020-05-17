import { SET_FORECASTDATA, SET_WEATHER_DATA } from "../actions";

export const weatherData = (state = null, action) => {
  switch (action.type) {
    case SET_FORECASTDATA: {
      const { city, forecastData } = action.value;
      return {
        ...state,
        [city]: { ...state[city], forecastData, forecastDataDate: new Date() },
      };
    }
    case SET_WEATHER_DATA: {
      const { city, weatherData } = action.value;
      return { ...state, [city]: { ...{ weatherData } } };
    }
    default:
      return state;
  }
};
