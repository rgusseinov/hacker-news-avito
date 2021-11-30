import { getItem } from '../../shared/requests/item';
import { LOAD_NEWS_ITEM_FAILURE, LOAD_NEWS_ITEM_SUCCESS } from './types';

export const loadSingleNews = (id) => async (dispatch) => {
  try {
    const item = await getItem(id);
    dispatch(addNewsItem(item));
  } catch (e) {
    dispatch(addNewsItemFailure());
  }
};

const addNewsItem = item => ({
  type: LOAD_NEWS_ITEM_SUCCESS,
  payload: item
});

const addNewsItemFailure = () => ({
  type: LOAD_NEWS_ITEM_FAILURE,
});
