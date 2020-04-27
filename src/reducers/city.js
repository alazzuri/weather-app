import { SET_CITY, SET_ABORTCONTROLLER, SET_FORECASTDATA } from "../actions";

export const city = (state = {}, action) => {
  switch (action.type) {
    case SET_CITY:
      return { ...state, selectedCity: action.value };
    case SET_ABORTCONTROLLER:
      return { ...state, abortController: action.value };
    case SET_FORECASTDATA:
      return { ...state, forecastData: action.value };
    default:
      return state;
  }
};
