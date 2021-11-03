import api from '../api/api';
import { key } from '../api/key';
import { detailsActions } from './details-slice';

export const fetchDetails = (id) => {
  return async (dispatch) => {
    try {
      const response = await api.get(
        `http://www.omdbapi.com/?apikey=${key}&i=${id}&plot=full`
      );
      dispatch(detailsActions.addDetails(response.data));
    } catch (err) {
      if (err.response) {
        console.log(err.response);
      } else {
        console.log('Error !');
      }
    }
  };
};
