import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { movies: [] },
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload.Search;
    },
  },
});

export const moviesActions = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
