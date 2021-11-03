import api from '../api/api';
import { key } from '../api/key';
import { seriesActions } from './series-slice';

export const fetchSeries = (seriesQuery) => {
  return async (dispatch) => {
    try {
      const response = await api.get(
        `&apikey=${key}&s=${seriesQuery}&type=series`
      );
      dispatch(seriesActions.addSeries(response.data));
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
