
import { getNewsIds } from '../../api/api';
import { LOAD_NEWS_START, LOAD_NEWS_SUCCESS } from './actionTypes';

export const loadNewsIds = () => async (dispatch) => {
  dispatch({
    type: LOAD_NEWS_START
  });

  const newsIds = await getNewsIds();

  dispatch({
    type: LOAD_NEWS_SUCCESS,
    payload: newsIds
  });

};
