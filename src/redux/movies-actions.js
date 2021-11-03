import api from '../api/api';
import { key } from '../api/key';
import { moviesActions } from './movies-slice';

export const fetchMovies = (movieQuery) => {
  return async (dispatch) => {
    try {
      const response = await api.get(
        `&apikey=${key}&s=${movieQuery}&type=movie`
      );
      dispatch(moviesActions.addMovies(response.data));
      console.log(response.data);
    } catch (err) {
      if (err.response) {
        console.log(err.response);
      } else {
        console.log('Error !');
      }
    }
  };
};
