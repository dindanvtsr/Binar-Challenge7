import { combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./moviesReducer";

// We have reducers, it will called in store to create an global state
export default combineReducers({
  movies: moviesReducer,
});
