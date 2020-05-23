import { SET_SAVED_CITY } from "../actions";

export const savedCities = (state = {}, action) => {
  switch (action.type) {
    case SET_SAVED_CITY:
      const handleState = (state) => {
        state.unshift(action.value);
        state.length = 2;

        return state;
      };
      return handleState(state);
    default:
      return state;
  }
};
