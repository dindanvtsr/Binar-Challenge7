import { createSlice } from "@reduxjs/toolkit";

// The initial state when the application load in first time
const initialState = {
  movies: [],
  detail: null,
  carousel:[]
};

// Define the reducers
const moviesSlicer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getAllMoviesReducer: (state, action) => {
      state.movies = action.payload;
    },
    getDetailReducer: (state, action) => {
      state.detail = action.payload;
    },
    getSearchReducer: (state,action) => {
      state.movies = action.payload;
    },
    getCarouselReducer: (state, action) => {
      state.carousel = action.payload;
    }
  },
});

// Export the reducer function, the functions will be called in actions
export const { getAllMoviesReducer, getDetailReducer, getSearchReducer, getCarouselReducer } = moviesSlicer.actions;

// Export the reducer to combine it with another reducers
export default moviesSlicer.reducer;
