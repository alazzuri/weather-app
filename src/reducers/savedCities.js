import { SET_SAVED_CITY } from "../actions";

export const savedCities = (state = {}, action) => {
  switch (action.type) {
    case SET_SAVED_CITY:
      return action.value;
    default:
      return state;
  }
};
