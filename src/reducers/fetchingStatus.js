import { SET_FETCHING_STATUS } from "../actions";

export const fetchingStatus = (state = false, action) => {
  switch (action.type) {
    case SET_FETCHING_STATUS:
      return action.value;
    default:
      return state;
  }
};
