import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './movies-slice';
import { seriesReducer } from './series-slice';
import { detailsReducer } from './details-slice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer,
    details: detailsReducer,
  },
});
