import axios from "axios";

import {
  getAllMoviesReducer, getDetailReducer, getSearchReducer, getCarouselReducer
} from "../reducers/moviesReducer";

// This function will be called in component and it will triggered the reducers
export const getAllMovies = () => async (dispatch) => {
  try {
    // Imagize we get data from API (the variable is users)
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=ca6104606a50d22fef2f8977abfb20a8'
    );

    // Dispatch to reducers
    dispatch(getAllMoviesReducer(data));
  } catch (error) {
    throw error;
  }
};

export const getDetail = (id) => async (dispatch) => {
  try {
    // Imagize we get data from API (the variable is users)
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ca6104606a50d22fef2f8977abfb20a8`
    );

    // Dispatch to reducers
    dispatch(getDetailReducer(data));
  } catch (error) {
    throw error;
  }
};

export const getSearch = (searchMvs) => async (dispatch) => {
  try {
    // Imagize we get data from API (the variable is users)
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=ca6104606a50d22fef2f8977abfb20a8&language=en-US&query=${searchMvs}&page=1&include_adult=false`
    );

    // Dispatch to reducers
    dispatch(getSearchReducer(data));
  } catch (error) {
    throw error;
  }
};

export const getCarousel = () => async (dispatch) => {
  try {
    // Imagize we get data from API (the variable is users)
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=ca6104606a50d22fef2f8977abfb20a8'
    );

    // Dispatch to reducers
    dispatch(getCarouselReducer(data));
  } catch (error) {
    throw error;
  }
};
