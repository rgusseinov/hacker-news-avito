
import { getItemById } from '../../api/api';
import { LOAD_NEWS_ITEM_SUCCESS } from './actionTypes';


export const setNewsItem = (newsItem) => ({
  type: LOAD_NEWS_ITEM_SUCCESS,
  payload: newsItem
});


export const requestSingleNews = (id) => async (dispatch) => {

  const singleNews = await getItemById(id);
  const action = setNewsItem(singleNews);
  dispatch(action);

};


