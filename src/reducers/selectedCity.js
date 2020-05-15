import { SET_CITY } from "../actions";

export const selectedCity = (state = {}, action) => {
  switch (action.type) {
    case SET_CITY:
      return action.value;
    default:
      return state;
  }
};
