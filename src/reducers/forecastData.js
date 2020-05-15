import { SET_FORECASTDATA } from "../actions";

export const forecastData = (state = null, action) => {
  switch (action.type) {
    case SET_FORECASTDATA:
      const { city, forecastData } = action.value;
      return { ...state, [city]: forecastData };
    default:
      return state;
  }
};
