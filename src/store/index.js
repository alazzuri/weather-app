import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { default as reducers } from "../reducers/";

const initialState = {
  savedCities: [
    "Cordoba, ar",
    "Buenos Aires, ar",
    "Miami, us",
    "Madrid, es",
    "Ciudad de Mexico, mx",
  ],
  selectedCity: null,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
