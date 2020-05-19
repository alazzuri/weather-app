import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { default as reducers } from "../reducers/";

const initialState = {
  savedCities: [
    "CORDOBA",
    "BUENOS AIRES",
    "MIAMI",
    "MADRID",
    "CIUDAD DE MEXICO",
  ],
  selectedCity: null,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
