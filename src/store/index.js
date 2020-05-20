import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { default as reducers } from "../reducers/";

const initialState = {
  savedCities: localStorage.getItem("wheaterApp_savedCities")
    ? JSON.parse(localStorage.getItem("wheaterApp_savedCities"))
    : ["MADRID", "MIAMI", "SAN PABLO", "BUENOS AIRES", "CORDOBA"],

  selectedCity: null,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
