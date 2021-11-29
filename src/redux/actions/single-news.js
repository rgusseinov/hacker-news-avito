import { getItem } from '../../shared/requests/item';
import { LOAD_NEWS_ITEM_SUCCESS } from './types';

export const loadSingleNews = (id) => async (dispatch) => {
  const singleNewsItem = await getItem(id);
  dispatch({
    type: LOAD_NEWS_ITEM_SUCCESS, 
    payload: singleNewsItem
  });
};
