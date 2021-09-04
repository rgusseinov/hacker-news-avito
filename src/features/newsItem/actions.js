
import { getNews } from '../../api/api';
import { LOAD_NEWS_ITEM, LOAD_NEWS_ITEM_SUCCESS } from './actionTypes';

export const loadNewsItem = () => async (dispatch) => {
  dispatch({
    type: LOAD_NEWS_ITEM
  });

  const news = await getNews();
  const newsItemArr = [];

  news.forEach(newsId => {
    newsItemArr.push({
      [newsId]: {}
    });
  });

  dispatch({
    type: LOAD_NEWS_ITEM_SUCCESS,
    payload: newsItemArr
  });

};
